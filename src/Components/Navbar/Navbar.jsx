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
    <div className='navbar' style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
        <div className='nav-logo'>
            <img src={logo} alt="Logo" />
        </div>
        <ul className='nav-menu'>
            <li onClick={()=> setMenu("home")}><a href="/#home">Home</a> { menu==="home"?<hr/>:<></> }</li>
            <li onClick={()=> setMenu("about")}><a href="/#about">About Us</a> { menu==="about"?<hr/>:<></> }</li>
            <li onClick={()=> setMenu("service")}><a href="/#services">Services</a> { menu==="service"?<hr/>:<></> }</li>
            <li className="dropdown" onClick={toggleContactMenu}>
                <div className='contact'>Contact Us <FontAwesomeIcon icon={faAngleDown} /></div>
                {contactMenuOpen && (
                  <>
                  <hr/>
                  <ul className="dropdown-menu">
                    <li onClick={() => handleContactItemClick("enquiry")}>
                      <Link style={{ textDecoration: 'none' }} to='/enquiry'>Enquiry at</Link>
                    </li>
                    <li onClick={() => handleContactItemClick("visit")}>
                      <Link style={{ textDecoration: 'none' }} to='/visit'>Visit Us</Link>
                    </li>
                    <li onClick={() => handleContactItemClick("quotation")}>
                      <Link style={{ textDecoration: 'none' }} to='/quotation'>Get Quotation </Link>
                    </li>
                  </ul>
                  </>
                )}
            </li>
        </ul>
        <div className='nav-quote'>
          
            <button  type="submit" ><Link to='/quotation' className='menu-item'>Get Quote</Link></button>
            
        </div>
    </div>
  );
}

export default Navbar;



