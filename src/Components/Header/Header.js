import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook,  faHome, faPhone, faSchool } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import'./Header.css';

const Header = () => {
    
    return (
        <div className="Header">
        <div className="logo">
            <h1>WebBee Institute</h1>
        </div>
        <div className="navbar">
        <nav className="navigation-bar">
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Home"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</NavLink>
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
to="/Service"> <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon> Service</NavLink>
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
to="/About"><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> About</NavLink>
      <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
to="/Contact"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Contact</NavLink>
            </nav>
        </div>
        </div>
    );
};

export default Header;