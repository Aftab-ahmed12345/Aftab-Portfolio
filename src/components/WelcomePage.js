import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './Blog';
import Login from './Login';

function WelcomePage() {
return (
<div> 
   
    <HeroSection/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Blog/>
    <Login/>
    
</div>
)
}
export default WelcomePage;