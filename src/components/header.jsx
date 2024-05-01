import { useEffect, useState, useRef } from "react";
import { Link as Linker, NavLink, useLocation } from "react-router-dom";
// import { NavHashLink as Link, HashLink } from "react-router-hash-link";
import { Link } from 'react-scroll';
import { List, X, ChevronDown, ChevronRight } from "react-bootstrap-icons";

function Header() {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);
    // let location = useLocation();
    useEffect(() => {
      const header = document.querySelector("#header");
  
      if (header) {
        const headerScrolled = () => {
          header.classList.toggle("header-scrolled", window.scrollY > 100);
        };
  
        window.addEventListener("load", headerScrolled);
        document.addEventListener("scroll", headerScrolled);
      }
  
      const backtotop = document.querySelector(".back-to-top");
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add("active");
          } else {
            backtotop.classList.remove("active");
          }
        };
        window.addEventListener("load", toggleBacktotop);
        document.addEventListener("scroll", toggleBacktotop);
      }
  
      const handleClick = (event) => {
        setIsActive(!isActive);
        document.querySelector("#navbar").classList.toggle("navbar-mobile");
      };
  
      const element = ref.current;
  
      element.addEventListener("click", handleClick);
  
      document.querySelector(".navbar .dropdown > a").addEventListener(
        "click",
        function (e) {
          if (
            document.querySelector("#navbar").classList.contains("navbar-mobile")
          ) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("dropdown-active");
          }
        },
        true
      );
  
      return () => {
        element.removeEventListener("click", handleClick);
      };
    }, []);
  return (
    <header id="header" className="fixed-top d-flex align-items-center pe-5">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">
            ST<span>.</span> FRANCIS CATHOLIC CHURCH
          </a>
        </h1>
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
          <Link
                  className="nav-link scrollto"
                  to="hero"
                  activeClass="active"
                  spy={true} 
                    smooth={true} 
                    // offset={50} 
                    duration={300}
                    activeClassName="active"
                    style={{cursor: "pointer"}}
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.remove("navbar-mobile");
                    console.log(isActive);
                  }}
                >
                
              Home
            </Link>
          </li>
          <li>
          <Link
                  className="nav-link scrollto"
                  to="about"
                  activeClass="active"
                  spy={true} 
                    smooth={true} 
                    // offset={50} 
                    duration={300}
                    activeClassName="active"
                  style={{cursor: "pointer"}}
                //   exact
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.remove("navbar-mobile");
                    console.log(isActive);
                  }}
                >
              About
            </Link>
          </li>
          <li>
          <Link
                  className="nav-link scrollto"
                  to="services"
                  activeClass="active"
                  spy={true} 
                    smooth={true} 
                    // offset={50} 
                    duration={300}
                    activeClassName="active"
                    style={{cursor: "pointer"}}
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.remove("navbar-mobile");
                    console.log(isActive);
                  }}
                >
              Parish Events
            </Link>
          </li>
          <li>
          <Link
                  className="nav-link scrollto"
                  to="portfolio"
                  activeClass="active"
                  spy={true} 
                    smooth={true} 
                    // offset={50} 
                    duration={300}
                    activeClassName="active"
                    style={{cursor: "pointer"}}
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.remove("navbar-mobile");
                    console.log(isActive);
                  }}
                >
              Catechism
            </Link>
          </li>
          <li>
          <Link
                  className="nav-link scrollto"
                  to="team"
                  activeClass="active"
                  style={{cursor: "pointer"}}
                  spy={true} 
                    smooth={true} 
                    // offset={50} 
                    duration={300}
                    activeClassName="active"
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.remove("navbar-mobile");
                    console.log(isActive);
                  }}
                >
              Parish Priests
            </Link>
          </li>
          {/* <li>
            <a className="nav-link scrollto" href="#team">
              Homilies
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#team">
              Livestream
            </a>
          </li> */}
          <li className="dropdown">
            <a href="#">
              <span>Ministry</span> <i className="bi bi-chevron-down"><ChevronDown /></i>
            </a>
            <ul>
              <li className="dropdown">
                <a href="#">
                  <span>Zones</span> <i className="bi bi-chevron-right"><ChevronRight /></i>
                </a>
                <ul>
                  <li>
                    <Link to="#">St. Albert the Great (Zone A)</Link>
                  </li>
                  <li>
                    <Link to="#">Zone B</Link>
                  </li>
                  <li>
                    <Link to="#">St. Thomas Aquinas (Zone C)</Link>
                  </li>
                  <li>
                    <Link to="#">St. Patrick (Zone D)</Link>
                  </li>
                  <li>
                    <Link to="#">St. Ambrose (Zone E)</Link>
                  </li>
                  <li>
                    <Link to="#">St. Ignatius (Zone F)</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Organizations</span> <i className="bi bi-chevron-right"><ChevronRight /></i>
                </a>
                <ul>
                  <li>
                    <Link to="#">Catholic Men Organization of Nigeria</Link>
                  </li>
                  <li>
                    <Link to="#">Catholic Women Organization</Link>
                  </li>
                  <li>
                    <Link to="#">Catholic Youths Organization of Nigeria</Link>
                  </li>
                  
                </ul>
              </li>
              <li>
                <Link to="#">Lay Apostolate Groups</Link>
              </li>
              <li>
                <Link to="#">Faith formation</Link>
              </li>
              <li>
                <Link to="#">Fellowship</Link>
              </li>
              <li>
                <Link to="#">Spiritual counseling</Link>
              </li>
              <li>
                <Link to="#">Evangelism</Link>
              </li>
              <li>
                <Link to="#">Parishioners</Link>
              </li>
            </ul>
          </li>
          
          <li>
          <Link
                  className="nav-link scrollto"
                  to="contact"
                  activeClass="active"
                  style={{cursor: "pointer"}}
                  spy={true} 
                    smooth={true} 
                    // offset={50} 
                    duration={300}
                    activeClassName="active"
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.remove("navbar-mobile");
                    console.log(isActive);
                  }}
                >
              Contact
            </Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle">
            {isActive ? (
                <X
                  className="mobile-nav-toggle"
                  size={30}
                  id="navbar-toggle"
                  ref={ref}
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.toggle("navbar-mobile");
                    console.log(isActive);
                  }}
                />
              ) : (
                <List
                  className="mobile-nav-toggle"
                  size={30}
                  id="navbar-toggle"
                  ref={ref}
                  onClick={() => {
                    setIsActive(!isActive);
                    document
                      .querySelector("#navbar")
                      .classList.toggle("navbar-mobile");
                    console.log(isActive);
                  }}
                />
              )}</i>
      </nav>
      
    </header>
  );
}

export default Header;
