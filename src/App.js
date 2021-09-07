import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import UserStories from './components/userStories';
import PostList from './components/postList';
import UserProfileView from './components/userProfileView';
import Footer from './components/footer'
import styled from 'styled-components'
import mockUserData from './mockData/mockUserData';
import mockUserPosts from './mockData/mockUserPosts';

const InnerContent = styled.main`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`
const youUser = mockUserData[0];

function App() {
  const contentContainer = React.createRef();
  const [userProfileView, setUserProfileView] = useState(false);
  const [currentUser, setCurrentUser] = useState(youUser);
  
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
    <div className="App">
      <Header />
      {!userProfileView && <UserStories onSelect={onSelectUser}/>}
      {!userProfileView && (  
          <InnerContent>
            <PostList isProfile={false} postData={mockUserPosts} theRef={contentContainer} selectUser={onSelectUser} /> 
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
  );
}

export default App;
