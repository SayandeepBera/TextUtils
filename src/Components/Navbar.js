import React from 'react';
import { Link, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';

// export default function Navbar({ title = 'Set the title', aboutText = 'About'}) {
export default function Navbar(props) {
  const location = useLocation(); // to highlight the active link

  return (
    <div className="fixed-top">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand ms-3 me-5" to="/" style={{fontSize : "35px", fontFamily : "fangsong"}}><i>📝{props.title}</i></Link>
          
          {/* Offcanvas Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Offcanvas Menu */}
          <div
            className={`offcanvas offcanvas-end text-bg-${props.mode} w-75`}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >

            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {[
                  {name: "Home", path: "/"},
                  {name: props.aboutText , path: "/about"}
                ].map((item)=>(
                  <li className='nav-item me-4 fw-semibold' key={item.name} style={{fontSize: "18px"}}>
                    <Link
                      className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Dark Mode Toggle (Shown inside offcanvas on mobile) */}
              <div className={`form-check form-switch text-${props.mode === 'info' ? 'dark' : 'light'} me-3 ms-3 my-2 fw-semibold`}>
                <input className="form-check-input" 
                  onChange={() => {
                    props.toggle(null);
                    document.querySelector('[data-bs-dismiss="offcanvas"]')?.click();
                  }}
                  type="checkbox" 
                  role="switch" 
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontSize: "18px"}}>{props.text}</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

// Define PropTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,  // Should be a string
  aboutText: PropTypes.string.isRequired,  // Should be a string
  toggle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired, // Should be a string
  mode: PropTypes.string.isRequired, // Should be a string
};

