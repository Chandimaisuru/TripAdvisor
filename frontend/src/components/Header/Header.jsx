import React,{useRef,useEffect,useContext} from 'react'
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link,useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo1.png'
import './header.css'

import { AuthContext } from "../../context/AuthContext";
// import { BASE_URL } from "../utils/config";


const nav_links = [
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
]

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate()
  const{user,dispatch} = useContext(AuthContext)

  const logout = ()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header' ref={headerRef}>

      <Container>

        <Row>

          <div className="nav_wrapper d-flex align-items-center justify-content-between">

            {/* ============logo=========== */}

            <div className='logo'>
              {/* <img src={logo} alt=" logo" width="500px" height="100px" /> */}
              <h2>TripAdvisor</h2>

            </div>

            {/* ============logo end=========== */}



            {/* ===========menu=================  */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="gap-5 menu d-flex align-items-center ">

                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}

              </ul>
            </div>

            {/* ===========menu=================  */}

            <div className="gap-4 nav_right d-flex align-items-center">
              <div className="gap-4 nav_btns d-flex align-items-center">

              {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn primary__btn" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="./login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="./register">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className='flex mobile__menu'onClick={toggleMenu}>

                < i className="ri-menu-line"></i>
              </span>
            </div>

          </div>

        </Row>


      </Container>






    </header>
  )
}

export default Header