import React from 'react';
import {useState} from 'react';
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
// import { doesUserExist, addNewUser } from './services/userservice';
import mockUserData from './mockData/mockUserData';
import mockUserPosts from './mockData/mockUserPosts';
// {
//     usersData: mockUserData, 
//     usersPosts: mockUserPosts,
//     currentUser: 0,
// });


const InnerContent = styled.main`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`
function App() {
  const contentContainer = React.createRef();
  const [usersData, setUsersData] = useState(mockUserData);
  const [usersPosts, setUsersPosts] = useState(mockUserPosts);
  const [userProfileView, setUserProfileView] = useState(false);
  // const [youUser, setYouUser] = useState(mockUserData[0]);
  const youUser = mockUserData[0];
  const [currentUser, setCurrentUser] = useState(youUser);
  const [searchVisible, setSearchVisible] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const globalStore = {
    users: usersData,
    posts: usersPosts,
  };
  
  // const testBackend = async () => {
  //   const newUser = {
  //     name: 'MegapixelsMike',
  //     firstName: 'Michael',
  //     lastName: 'Coustier',
  //     email: 'curiousmike@gmail.com',
  //     phone: '510-557-0109',
  //     password: 'encrypted',
  //     description: 'A photographer who loves astrophotography, pet photography and landscapes.  Nikon Z lover.  Computer hardware enthusiast.  Hiker.  Dog lover.  Family lover.  Enjoys a good Stephen King book.  Respects the sloth.',
  //     avatar: 'me.jpg',
  //     posts: 0,
  //     followers: [],
  //     following: [],
  //   }
  //   const userExists = await (doesUserExist(newUser.name));
  //   if (!userExists) {
  //     if (addNewUser (newUser)) {
  //       console.log('user successfully added');
  //     } else {
  //       console.log('error adding new user');
  //     };
  //   } else {
  //     console.log('new user not added');
  //   }
  // }
  // testBackend ();

  const modifyUserData = (user) => {
    console.log ('modify user data = ', user);
  }

  const onCreatePost = (imageData, description) => {
    const copyOfPostData = [...usersPosts];
    const newPost = {
      id: 27,
      userId: 1,
      timestamp: 11,
      description: description,
      likes: [3],	// index of userId who liked it
      comments: [],
      image: imageData
    };
    copyOfPostData.unshift(newPost);
    setUsersPosts(copyOfPostData);
    setShowCreatePost(false);
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
    console.log('here');
  }

  const addFavorite = () => {
    // console.log ('add favorite');
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
    const updatedUser = { ...currentUser, ...updatedData };
    const copyOfUsersData = [...usersData];
    let indexOfUpdatedUser = copyOfUsersData.findIndex ( user => user.id === updatedUser.id);
    copyOfUsersData[indexOfUpdatedUser] = updatedUser;
    setUsersData(copyOfUsersData);
  }

  const showUserStories = !searchVisible && !showCreatePost && !userProfileView && !showCreateUser;
  const showPostList = !searchVisible  && !showCreatePost && !userProfileView && !showCreateUser;
  // console.log('youUser = ', youUser);
  return (
    // This storeContext.consumer and below is what allows the store to "pass store values down"
    <StoreContext.Provider value={globalStore}> 
      <div className="App">
          <Header />
          {showUserStories && <UserStories onSelect={onSelectUser}/>}
          {showPostList && (  
              <InnerContent>
                <PostList isProfile={false} theRef={contentContainer} postData={usersPosts} selectUser={onSelectUser} /> 
              </InnerContent>
          )}
          {userProfileView && <UserProfileView user={currentUser} onSelectUser = {onSelectUser} onUpdateUser={onUpdateUser}/>}
          {searchVisible && <Search />}
          {showCreatePost && <CreatePost onClose={()=>setShowCreatePost(false)} onSave={(image, desc)=>onCreatePost(image, desc)}/>}
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
    </StoreContext.Provider>
  );
}

export default App;
