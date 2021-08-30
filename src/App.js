import './App.css';
import Header from './components/header';
import PopularPosters from './components/popularPosters';
import PostList from './components/postList';
import Footer from './components/footer'
import styled from 'styled-components'

const InnerContent = styled.div`
  flex: 1;
`

function App() {
  return (
    <div className="App">
      <Header />
      <InnerContent>
        <PopularPosters />
        <PostList /> 
      </InnerContent>
      <Footer />
    </div>
  );
}

export default App;
