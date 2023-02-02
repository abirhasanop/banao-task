import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Posts />
    </div>
  );
}

export default App;
