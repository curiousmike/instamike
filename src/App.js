import './App.css';
import Header from './components/header';
import PopularPosters from './components/popularPosters';
import PostList from './components/postList';
import Footer from './components/footer'
import styled from 'styled-components'

const InnerContent = styled.div`
  height: 80vh;
  margin: 2px 0px 2px 0px;
`

function App() {
  return (
    <div className="App">
      <Header />
      <PopularPosters />
      <InnerContent>
        <PostList /> 
      </InnerContent>
      <Footer />
    </div>
  );
}

export default App;
