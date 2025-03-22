import React from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

// export default function Navbar({ title = 'Set the title', aboutText = 'About'}) {
export default function Navbar(props) {
  // const myStyle={
  //   height: "50px",
  //   width: "10%",
  //   borderRadius: "50%"
  // }

  // const multiMode=(color)=>{
  //   document.body.style.background=color;
  // }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* <button type="button" className="btn btn-warning me-4" style={myStyle} onClick={()=>multiMode("#ffc107")}>Enable</button>
        <button type="button" className="btn btn-success me-4" style={myStyle} onClick={()=>multiMode("#5ee816")}>Enable</button>
        <button type="button" className="btn btn-info me-4" style={myStyle} onClick={()=>multiMode("#0bc7ee")}>Enable</button>
        <button type="button" className="btn btn-light" style={myStyle} onClick={()=>{multiMode("white")}}>Default</button> */}

        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggle("primary")}} style={{height: "35px",width: "35px",cursor: "pointer"}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggle("danger")}} style={{height: "35px",width: "35px",cursor: "pointer"}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggle("success")}} style={{height: "35px",width: "35px",cursor: "pointer"}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggle("warning")}} style={{height: "35px",width: "35px",cursor: "pointer"}}></div>
          <div className="bg-light rounded mx-2" onClick={()=>{props.toggle("light")}} style={{height: "35px",width: "35px",cursor: "pointer"}}></div>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'secondary' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={()=>{props.toggle(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
        </div>
      </nav>
    </div>
  )
}

// Define PropTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,  // Should be a string
  aboutText: PropTypes.string.isRequired,  // Should be a string
};

