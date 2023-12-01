import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import Blog from './components/Blog';
import Login from './components/Login';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom"
import WelcomePage from './components/WelcomePage';

function App() {
  return (
   <>
     <Header/>
     
     <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/about" element={<About/>} />   
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
