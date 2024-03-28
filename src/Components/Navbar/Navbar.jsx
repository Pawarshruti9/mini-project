import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Yamai.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
   const [menu, setMenu] = useState("home");
   const [contactMenuOpen, setContactMenuOpen] = useState(false);

   const toggleContactMenu = () => {
      setContactMenuOpen(!contactMenuOpen);
   };

   const handleContactItemClick = (menuItem) => {
      setMenu(menuItem);
      setContactMenuOpen(false); // Close the dropdown menu after clicking an item
   };

   return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Logo" />
        </div>
        <ul className='nav-menu'>
            <li onClick={()=> setMenu("home")}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{ menu==="home"?<hr/>:<></> }</li>
            <li onClick={()=> setMenu("about")}><a href="#about">About Us</a>{ menu==="about"?<hr/>:<></> }</li>
            <li onClick={()=> setMenu("service")}><a href="#services">Services</a> { menu==="service"?<hr/>:<></> }</li>
            <li className="dropdown" onClick={toggleContactMenu}  > 
                <div className='contact'>Contact Us <FontAwesomeIcon icon={faAngleDown}  /></div>
                {contactMenuOpen && (
                  <>
                  <hr/>
                  <ul className="dropdown-menu">
                    <li onClick={() => handleContactItemClick("enquiry")}>
                      <Link style={{ textDecoration: 'none' }} to='/enquiry'>Enquiry Form</Link>
                    </li>
                    <li onClick={() => handleContactItemClick("visit")}>
                      <Link style={{ textDecoration: 'none' }} to='/visit'>Visit Form</Link>
                    </li>
                  </ul>
                  </>
                )}
            </li>
        </ul>
        <div className='nav-quote'>
            <button>Get Quote</button>
        </div>
    </div>
  );
}

export default Navbar;
