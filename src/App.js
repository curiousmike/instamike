import './App.css';
import Header from './components/header';
import PopularPosters from './components/popularPosters';
import PostList from './components/postList';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <PopularPosters />
      <PostList />
      <Footer />
    </div>
  );
}

export default App;
