import React from 'react'
import "./footer.css"

import {Col,Container,Row,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";

const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

function Footer() {
   
  const year =new Date().getFullYear()

  return (
    <footer className="footer">

     <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iusto totam id eaque asperiores!</p>

            <div className="gap-4 social__links d-flex align-items-center">
                   <span>
                      <Link to='#'><i className="ri-youtube-line"></i></Link>
                    </span> 

                    <span>
                      <Link to='#'><i className="ri-github-fill"></i></Link>
                    </span> 

                    <span>
                      <Link to='#'><i className="ri-facebook-circle-fill"></i></Link>
                    </span> 

                    <span>
                      <Link to='#'><i className="ri-instagram-line"></i></Link>
                    </span> 
                    
            </div>
          </div>
        
        </Col>

        <Col lg='3'>
          <h5 className='footer__link-title'>Discover</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick_links.map((item,index)=>(
                <ListGroupItem key={index} className='border-0 ps-0'>
                  <Link to={item.path}>{item.display}</Link>

                </ListGroupItem>
              ))
            }

          </ListGroup>
        </Col>

        <Col lg='3'>
          <h5 className='footer__link-title'>Quick links</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick_links2.map((item,index)=>(
                <ListGroupItem key={index} className='border-0 ps-0'>
                  <Link to={item.path}>{item.display}</Link>

                </ListGroupItem>
              ))
            }

          </ListGroup>
        </Col>

        <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex align-items-center">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  Address:
                </h6>

                <p className="mb-0">Belihuloya, Balangoda</p>
              </ListGroupItem>
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex align-items-center">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                  <i className="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">traveltripper@.com</p>
              </ListGroupItem>
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex align-items-center">
                <h6 className="mb=0 d-flex align-items-center gap-2">
                  <span>
                  <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>

                <p className="mb-0">+941456790</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className="pt-5 text-center">
            <p className="copyright">Copyrights {year} All rights reserved</p>
          </Col>
      </Row>

     </Container>
    

    </footer>
  )
}

export default Footer