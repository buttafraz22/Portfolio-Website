import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href='https://www.linkedin.com/in/afraz-butt-555362261/' target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn"/></a>
                <a href='https://github.com/buttafraz22' target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github"/></a>
                <a href='https://www.instagram.com/buttafraz/' target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                <a href='https://gitlab.com/buttafraz22' target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Gitlab"/></a>
            </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
  