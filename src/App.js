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

const InnerContent = styled.main`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`
function App() {
  const contentContainer = React.createRef();
  const contextValue = useContext(StoreContext);  // this gets the context(store) as a JSON object
  const [userProfileView, setUserProfileView] = useState(false);
  const [youUser, setYouUser] = useState(contextValue.usersData[contextValue.currentUser]);
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
    // This storeContext.consumer and below is what allows the store to "pass store values down"
    <StoreContext.Consumer> 
    {({usersData, usersPosts}) => (
      <div className="App">
          <Header />
          {!userProfileView && <UserStories usersData={usersData} onSelect={onSelectUser}/>}
          {!userProfileView && (  
              <InnerContent>
                <PostList usersData={usersData} isProfile={false} postData={usersPosts} theRef={contentContainer} selectUser={onSelectUser} /> 
              </InnerContent>
          )}
          {userProfileView && <UserProfileView usersData={usersData} user={currentUser} onSelectUser = {onSelectUser} onUpdateUser={onUpdateUser}/>}
          <Footer 
            goHome = {() => goHome()}
            doSearch = {() => doSearch()}
            addImage = {() => addImage()}
            addFavorite= {() => addFavorite()}
            goYou = {() => goYou()}
            youUser = {youUser}
          />
      </div>
    )}
      </StoreContext.Consumer>
  );
}

export default App;
