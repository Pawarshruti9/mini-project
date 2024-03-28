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
            <div className='footerlinksdiv'>
              <h3>Get in Touch</h3>
              <p>
                <a href="https://www.google.com/maps/place/Yamai+Construction/@17.6602835,75.9040755,20.75z/data=!4m15!1m8!3m7!1s0x3bc5da768c001f2d:0x3f15d49126a59198!2sVIP+Rd,+Solapur,+Maharashtra!3b1!8m2!3d17.6616793!4d75.9031561!16s%2Fg%2F11bymy8t6l!3m5!1s0x3bc5db130b8cba43:0x2c80243872a14c7f!8m2!3d17.6604773!4d75.9041497!16s%2Fg%2F11g2wlhdxh?entry=ttu" target="_blank" rel="noopener noreferrer">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.9845345466078!2d75.90407553244754!3d17.660283536778035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db130b8cba43%3A0x2c80243872a14c7f!2sYamai%20Construction!5e0!3m2!1sen!2sin!4v1711594719667!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </a>
              </p>
            </div>

          </div>
          <div className='footerjoin'>
            <div className='mailing'>
            <h3>Join US</h3>
            <input type="text"  id="name" placeholder='Name'/>
            <input type="text"  id="email"  placeholder='Email'/>
            <button className='subscribe'>Subscribe</button>
            </div>
            <div className="follow">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" />
              </a>
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
