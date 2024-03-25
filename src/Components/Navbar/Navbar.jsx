import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/Yamai.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Logo" />
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link  style={{textDecoration:'none'}} to='/'>Home</Link>{ menu==="home"?<hr/>:<></> }</li>
            <li  onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/about'>About Us</Link> { menu==="about"?<hr/>:<></> }</li>
            <li  onClick={()=>{setMenu("service")}}><Link style={{textDecoration:'none'}} to='/services'>Services</Link> { menu==="service"?<hr/>:<></> }</li>
            <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}} to='/contact'>Contact Us</Link> { menu==="contact"?<hr/>:<></> } </li>
        </ul>
        <div className='nav-quote'>
            <button>Get Quota</button>
        </div>
    </div>
  );
}

export default Navbar;
