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
import { getPosts, addNewPost } from './services/postservice';

const YouUserName = 'MegapixelsMike';

const InnerContent = styled.main`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`
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
  
  const globalStore = {
    users: usersData,
    posts: usersPosts,
  };

  useEffect (() => {
    async function loadUserData () {
      const users = await getUsers();
      if (users) setUsersData(users);

      const defaultUser = users.filter(user=> {return user.name === YouUserName})[0];
      console.log('YouUser = ', defaultUser.name);
      setCurrentUser(defaultUser);
      setYouUser(defaultUser);
    }
    async function loadPostData () {
      const posts = await getPosts();
      if (posts) setUsersPosts(posts);
    }
    loadUserData();
    loadPostData();
  }, []);

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
  return (
    // This storeContext.consumer and below is what allows the store to "pass store values down"
    <StoreContext.Provider value={globalStore}> 
    { usersData && usersPosts && (
      <div className="App">
          <Header />
          {showUserStories && <UserStories onSelect={onSelectUser}/>}
          {showPostList && (  
              <InnerContent>
                <PostList isProfile={false} theRef={contentContainer} selectUser={onSelectUser} /> 
              </InnerContent>
          )}
          {userProfileView && <UserProfileView user={currentUser} onSelectUser = {onSelectUser} onUpdateUser={onUpdateUser}/>}
          {searchVisible && <Search selectUser={onSelectUser}/>}
          {showCreatePost && <CreatePost onClose={()=>setShowCreatePost(false)} onSave={(newpost)=>onCreatePost(newpost)}/>}
          {showCreateUser && <CreateUser onClose={()=>setShowCreateUser(false)} />}
          <Footer 
            goHome = {() => goHome()}
            doSearch = {() => doSearch()}
            createPost = {() => createPost()}
            addFavorite= {() => addFavorite()}
            goYou = {() => goYou()}
            youUser = {youUser}
          />
      </div>
      )}
    </StoreContext.Provider>
  );
}

export default App;
