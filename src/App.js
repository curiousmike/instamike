import React from 'react';
import './App.css';
import Header from './components/header';
import PopularPosters from './components/popularPosters';
import PostList from './components/postList';
import Footer from './components/footer'
import styled from 'styled-components'

const InnerContent = styled.main`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`

function App() {
  const contentContainer = React.createRef();
  
  const goHome = () => {
    contentContainer.current.scrollTo(0,0);
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
    console.log ('go you');
  }

  return (
    <div className="App">
      <Header />
      <PopularPosters />
      <InnerContent>
        <PostList theRef={contentContainer} /> 
      </InnerContent>
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
