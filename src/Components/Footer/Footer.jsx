import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Footer.css';
import map from "../Assets/Unknown.jpeg";
import insta from "../Assets/insta.png";
import fb from "../Assets/fb.png";
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";
import yamai from "../Assets/Yamai2.png";

const Footerpg = () => {
  return (
    <div className='footer'>
      <div className='footersection-padding'>
        <div className='footerlinks'>
          <div className='footerlinksdiv'>
            <h3>Get in Touch</h3>
            <img className="maping" src={map} alt="" />
          </div>
          <div className='footerjoin'>
            <div className='mailing'>
            <h3>Join US</h3>
            <input type="text"  id="name" placeholder='Name'/>
            <input type="text"  id="email"  placeholder='Email'/>
            <button className='subscribe'>Subscribe</button>
            </div>
            <div className="follow">
              <img src={insta} alt="" />
              <img src={fb} alt= ""/>
              <img src={linkedin} alt= ""/>
              <img src={twitter} alt= ""/>
            </div>
           
         
          
          </div>
          <div className='explorepg'>
            <h3>Explore</h3>
            <ul className='pages'>
              <a href="#">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact us</a>
              <a href="">Review</a>

            </ul>
          </div>

          <div className='copyright'> 
          <img src={yamai} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footerpg;
