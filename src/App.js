import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import UserStories from './components/userStories';
import PostList from './components/postList';
import UserProfileView from './components/userProfileView';
import Footer from './components/footer'
import Search from './components/search'
import CreatePost from './components/createPost';
import CreateUser from './components/createUser';
import styled from 'styled-components'
import { StoreContext } from './store';
import { getUsers, updateUser } from './services/userservice';
import { getPosts, addNewPost, updatePost } from './services/postservice';
import {CircularProgress} from '@material-ui/core';

// import { formatDate } from './utils/utils';
// console.log('monoinsert says =', formatDate(1632440515896));
// console.log('db says = ', formatDate(1632440515896));
// console.log('i said = ', formatDate(1632440515878));
const YouUserName = 'Liamzing'; // 'NightOwlHiker'; // 'Watering Can'; // 'JustinYourFace'; // 'Liamzing'; // 'hopelinkvader';

const InnerContent = styled.main`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`
const LoadingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
`;

const ErrorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
font-size: 24px;
font-weight: 700;
color: red;
`;

function App() {
  const contentContainer = React.createRef();
  const [usersData, setUsersData] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);
  const [userProfileView, setUserProfileView] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [youUser, setYouUser] = useState(null);
  const [networkError, setNetworkError] = useState(null);
  
  const globalStore = {
    users: usersData,
    posts: usersPosts,
    youUser: youUser,
    updateUser: (user) => {updateUser(user)},
    updatePost: (post) => {updatePost(post)},
  };

  const updateUser = (userToUpdate) => {
    const updatedUsers = [...usersData];
    const index = updatedUsers.findIndex((user) => user.name === userToUpdate.name);
    updatedUsers[index] = userToUpdate;
    setUsersData(updatedUsers);
  }

  const updatePost = (postToUpdate) => {
    const updatedPosts = [...usersPosts];
    const index = updatedPosts.findIndex((post) => post._id === postToUpdate._id);
    updatedPosts[index] = postToUpdate;
    setUsersPosts(updatedPosts);
  }

  useEffect (() => {
    async function loadUserData () {
      const usersResult = await getUsers();
      if (usersResult.data) { 
        setUsersData(usersResult.data);
        const defaultUser = usersResult.data.filter(user=> {return user.name === YouUserName})[0];
        setCurrentUser(defaultUser);
        setYouUser(defaultUser);
        } else {
        updateNetworkError(`Error: loadUserData.\n${usersResult.status}\n${usersResult.msg}`);
      }
    }
    async function loadPostData () {
      const postsResult = await getPosts();
      if (postsResult?.data) {
         setUsersPosts(postsResult.data);
      } else {
        updateNetworkError(`Error: loadPostData.\n${postsResult?.status}\n${postsResult?.msg}`);
      }
    }
    loadUserData();
    loadPostData();
  }, []);

  const updateNetworkError = (error) => {
    setNetworkError (error);
  }

  const onCreatePost = (newPost) => {
    newPost.name = youUser.name;
    setShowCreatePost(false);
    addNewPost(newPost);  // tell backend

    // locally add
    const posts = [...usersPosts];
    posts.unshift(newPost);
    setUsersPosts(posts);
    goYou();
  }

  const goHome = () => {
    setShowCreatePost(false);
    setUserProfileView(false);
    setSearchVisible(false);
    if (contentContainer?.current)    contentContainer.current.scrollTo(0,0);
  }
  
  const doSearch = () => {
    setShowCreatePost(false);
    setUserProfileView(false);
    setSearchVisible(true);
  }

  const createPost = () => {
    setUserProfileView(false);
    setSearchVisible(false);
    setShowCreatePost(true);
  }

  const addFavorite = () => {
    setUserProfileView(false);
    setSearchVisible(false);
    setShowCreatePost(false);
    setShowCreateUser(true);

  }

  const goYou = () => {
    setCurrentUser(youUser);
    setUserProfileView(true);
    setSearchVisible(false);
  }

  const onSelectUser = (user) => {
    setCurrentUser(user);
    setUserProfileView(true);
  }

  const onUpdateUser = (updatedData) => {
    updateUser(currentUser, updatedData);
  }

  const showUserStories = !searchVisible && !showCreatePost && !userProfileView && !showCreateUser;
  const showPostList = !searchVisible  && !showCreatePost && !userProfileView && !showCreateUser;
  const showLoading = usersPosts.length === 0 || usersData.length === 0;

  return (
    // This storeContext.consumer and below is what allows the store to "pass store values down"
    <StoreContext.Provider value={globalStore}>
      <div className="App">
          <Header />
          {networkError && <ErrorContainer>{networkError}</ErrorContainer>}
          {!networkError && showUserStories && <UserStories onSelect={onSelectUser}/>}
          {showLoading && networkError === null && <InnerContent><LoadingContainer><CircularProgress /></LoadingContainer></InnerContent>}
          {showPostList && (  
              <InnerContent>
                <PostList isProfile={false} theRef={contentContainer} selectUser={onSelectUser} /> 
              </InnerContent>
          )}
          {userProfileView && <UserProfileView user={currentUser} onSelectUser = {onSelectUser} onUpdateUser={onUpdateUser}/>}
          {searchVisible && <Search selectUser={onSelectUser}/>}
          {showCreatePost && <CreatePost onClose={()=>setShowCreatePost(false)} onSave={(newpost)=>onCreatePost(newpost)}/>}
          {showCreateUser && <CreateUser onClose={()=>setShowCreateUser(false)} />}
          {!networkError && <Footer 
            goHome = {() => goHome()}
            doSearch = {() => doSearch()}
            createPost = {() => createPost()}
            addFavorite= {() => addFavorite()}
            goYou = {() => goYou()}
            youUser = {youUser}
          />}
      </div>
    </StoreContext.Provider>
  );
}

export default App;
