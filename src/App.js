import React from 'react';
import {useState, useEffect, useContext} from 'react';
import './App.css';
import Header from './components/header';
import UserStories from './components/userStories';
import PostList from './components/postList';
import UserProfileView from './components/userProfileView';
import Footer from './components/footer'
import Search from './components/search'
import styled from 'styled-components'
import { StoreContext } from './store';

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
  const [youUser, setYouUser] = useState(mockUserData[0]);
  const [currentUser, setCurrentUser] = useState(youUser);
  const [searchVisible, setSearchVisible] = useState(false);  
  const globalStore = {
    users: usersData,
    posts: usersPosts,
  };

  const modifyUserData = (user) => {
    console.log ('modify user data = ', user);
  }

  const goHome = () => {
    setUserProfileView(false);
    setSearchVisible(false);
    if (contentContainer?.current)    contentContainer.current.scrollTo(0,0);
  }
  
  const doSearch = () => {
    setUserProfileView(false);
    setSearchVisible(true);
  }

  const addImage = () => {
    console.log ('add image');
  }

  const addFavorite = () => {
    console.log ('add favorite');
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

  const showUserStories = !searchVisible && !userProfileView;
  const showPostList = !searchVisible && !userProfileView;
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
          <Footer 
            goHome = {() => goHome()}
            doSearch = {() => doSearch()}
            addImage = {() => addImage()}
            addFavorite= {() => addFavorite()}
            goYou = {() => goYou()}
            youUser = {youUser}
          />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
