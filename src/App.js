import React from 'react';
import {useState, useEffect, useContext} from 'react';
import './App.css';
import Header from './components/header';
import UserStories from './components/userStories';
import PostList from './components/postList';
import UserProfileView from './components/userProfileView';
import Footer from './components/footer'
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
  // const contextValue = useContext(StoreContext);  // this gets the context(store) as a JSON object
  
  const [usersData, setUsersData] = useState(mockUserData);
  const [usersPosts, setUsersPosts] = useState(mockUserPosts);

  const [userProfileView, setUserProfileView] = useState(false);
  const [youUser, setYouUser] = useState(mockUserData[0]);
  const [currentUser, setCurrentUser] = useState(youUser);
  
  const globalStore = {
    users: usersData,
    posts: usersPosts,
  };

  const modifyUserData = (user) => {
    console.log ('modify user data = ', user);
  }

  const goHome = () => {
    setUserProfileView(false);
    if (contentContainer?.current)    contentContainer.current.scrollTo(0,0);
  }
  
  const doSearch = () => {
    console.log ('do search');
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
  }

  const onSelectUser = (user) => {
    setCurrentUser(user);
    setUserProfileView(true);
  }

  const onUpdateUser = (updatedData) => {
    const updatedUser = { ...currentUser, ...updatedData };
    console.log('updateUser = ', updatedUser);
  }

  return (
    // This storeContext.consumer and below is what allows the store to "pass store values down"
    <StoreContext.Provider value={globalStore}> 
      <div className="App">
          <Header />
          {!userProfileView && <UserStories onSelect={onSelectUser}/>}
          {!userProfileView && (  
              <InnerContent>
                <PostList isProfile={false} theRef={contentContainer} postData={usersPosts} selectUser={onSelectUser} /> 
              </InnerContent>
          )}
          {userProfileView && <UserProfileView user={currentUser} onSelectUser = {onSelectUser} onUpdateUser={onUpdateUser}/>}
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
