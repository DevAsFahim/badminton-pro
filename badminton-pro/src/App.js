import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercises from './components/Exercises/Exercises';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercises></Exercises>
      <Blog></Blog>
    </div>
  );
}

export default App;