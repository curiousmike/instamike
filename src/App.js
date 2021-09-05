import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import PopularPosters from './components/popularPosters';
import PostList from './components/postList';
import UserProfileView from './components/userProfileView';
import mockPostListData from './mockData/mockPostListData.js';
import Footer from './components/footer'
import styled from 'styled-components'

const InnerContent = styled.main`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`
const youUser = { 
  id: 1,
  name: 'MegapixelsMike',
  avatar: 'me.jpg',
  posts: 50,
  followers: 120,
  following: 45,
};

function App() {
  const contentContainer = React.createRef();
  const [userProfileView, setUserProfileView] = useState(false);
  const [currentUser, setCurrentUser] = useState(youUser);
  useEffect(() => {
  }, [userProfileView])
  
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

  return (
    <div className="App">
      <Header />
      {!userProfileView && <PopularPosters onSelect={onSelectUser}/>}
      {!userProfileView && (  
          <InnerContent>
            <PostList postData={mockPostListData} theRef={contentContainer} selectUser={onSelectUser} /> 
          </InnerContent>
      )}
      {userProfileView && <UserProfileView user={currentUser} />}
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
