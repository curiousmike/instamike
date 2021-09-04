import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import PopularPosters from './components/popularPosters';
import PostList from './components/postList';
import UserProfileView from './components/userProfileView';
import Footer from './components/footer'
import styled from 'styled-components'

const InnerContent = styled.main`
  height: 80vh;
  // flex: 1;
  margin: 2px 0px 2px 0px;
`
function App() {
  const contentContainer = React.createRef();
  const [userProfileView, setUserProfileView] = useState(false);

  useEffect(() => {
    console.log('userProfileView = ', userProfileView);
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
    setUserProfileView(true);
  }

  return (
    <div className="App">
      <Header />
      {!userProfileView && <PopularPosters />}
      {!userProfileView && (  
          <InnerContent>
            <PostList theRef={contentContainer} /> 
          </InnerContent>
      )}
      {userProfileView && <UserProfileView />}
      <Footer 
      goHome = {() => goHome()}
      doSearch = {() => doSearch()}
      addImage = {() => addImage()}
      addFavorite= {() => addFavorite()}
      goYou = {() => goYou()}/>
    </div>
  );
}

export default App;
