import './App.css';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './pages/About';
import Experiance from './pages/Experiance';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About /> 
      <Experiance />
      <Contact /> 
      <SocialLinks />
    </div>
  );
}

export default App;
