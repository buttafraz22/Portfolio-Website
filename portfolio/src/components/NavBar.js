import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const NavBar = () => {
  const [activeLink,setActiveLink] = useState('home')
  let [scrolled,setScrolled] = useState(false)
  
  useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled = true
            }
            else{
                setScrolled = false;
            }
        }
        /*
        Adding scroll functionality to the window
         */
        window.addEventListener("scroll",onScroll)
        // Now we have to remove the scroll functionality from the DOM when the component is removed.
        return () => window.removeEventListener("scroll",onScroll)
  },[])

   const onUpdateActiveLink = (value) => {
    setActiveLink(value)
   }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-id'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href='https://www.linkedin.com/in/afraz-butt-555362261/' target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn"/></a>
                <a href='https://github.com/buttafraz22' target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github"/></a>
                <a href='https://www.instagram.com/buttafraz/' target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                <a href='https://gitlab.com/buttafraz22' target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Gitlab"/></a>
            </div>
            <button className='contactUs' onClick={() => console.log('connect')}>
                <span>Contact Me!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

