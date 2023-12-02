import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
return (
 
       <Navbar expand="lg" className="bg-dark fixed-top" style={{backgroundColor:"black"}} >
      <Container >
        <Navbar.Brand  className='text-light' style={{color:"red", paddingLeft:"2rem"}}>Aftab Ahmed.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto navabr" style={{marginLeft:"auto"}}>
            <Nav.Link className='text-light'> <Link to={"/"} style={{textDecoration:"none",color:"white"}}>Home</Link></Nav.Link>
            <Nav.Link className='text-light'><Link to={"/about"} style={{textDecoration:"none",color:"white"}}>About</Link></Nav.Link>
            <Nav.Link className='text-light'><Link to={"/skills"} style={{textDecoration:"none",color:"white"}}>Skills</Link></Nav.Link>
            <Nav.Link className='text-light'><Link to={"/portfolio"} style={{textDecoration:"none",color:"white"}}>Portfolio</Link></Nav.Link>
            <Nav.Link className='text-light'><Link to={"/contact"} style={{textDecoration:"none",color:"white"}}>Contact Us</Link></Nav.Link>
            <Nav.Link className='text-light'><Link to={"/blog"} style={{textDecoration:"none",color:"white"}}>Blog</Link></Nav.Link>
            <Nav.Link className='text-light'><Link to={"/login"} style={{textDecoration:"none",color:"white" ,marginRight:"20rem"}}>Login</Link></Nav.Link>
       <a target="_blank" class="btn text-white rounded-pill" style={{backgroundColor:"#43b665" }}type="primary" shape="round" href="https://drive.google.com/file/d/1Wt3HNDEzNyAjmKE3MZCJ73SOzOcYiDLx/view?usp=sharing">
        <span role="img" aria-label="download" class="anticon anticon-download"><svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg></span> Download CV</a>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
)
}

export default Header