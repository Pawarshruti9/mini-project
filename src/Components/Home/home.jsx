import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import construction from '../Assets/construction.jpg';
import crusher from '../Assets/crusher.jpg';
import bricks from '../Assets/bricks.jpg';
import agencies from '../Assets/agencies.jpg';
import enterprises from '../Assets/enterprises.jpg';
import energy from '../Assets/energy.jpg';
// import about from '../Assets/about.jpg'
import CountUp from "react-countup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faClock, faSmile, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import different icons
// import Clients from './Clients';

const Homepg = () => {
  return (
    <section id='home' className="maincontainer">
      <div className="home-container">
        <div className="centered">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing content and services</p>
          <button> 
          <Link to="/about" className="menu-item">
            <span className="explore-button">Explore</span>
          </Link>
          </button>
        </div>
      </div>

      <div></div>

      <section id='about' className='aboutus'>
        <div><h2 className='heading-with-line'>About Us</h2></div>
        
        <div className='about-container'>
          <div className='about-content'>
            <div className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis voluptatum perspiciatis nisi voluptatem ab assumenda debitis saepe dolores quaerat temporibus dolor pariatur, delectus deserunt, suscipit vel eligendi vero nulla qui! Quidem iste consequuntur maiores.
            </div>
            <div className='para2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vero.
            </div>
            <div className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis voluptatum perspiciatis nisi voluptatem ab assumenda debitis saepe dolores.
            </div>
            <div className="btn">
              <button><Link to="/about" className="menu-item">Know More</Link></button>
            </div>

          </div>
          <div className="about-image"><img src='' alt="" /></div>
        </div>
          
        <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={450} end={600} duration={4} /> <span>+</span>
                </span> <br />
                <span className="secondaryText">Complete Projects</span>
                <FontAwesomeIcon icon={faTrophy} className="icon" />
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp  end={35} duration={4} /> <span>+</span>
                </span> <br />
                <span className="secondaryText">Years of Experience</span>
                <FontAwesomeIcon icon={faClock} className="icon" />
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={95} /> <span>+</span>
                </span> <br />
                <span className="secondaryText">Happy Clients</span>
                <FontAwesomeIcon icon={faSmile} className="icon" />
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={150} end={200} duration={4} /> <span>+</span>
                </span> <br />
                <span className="secondaryText">Professional Team</span>
                <FontAwesomeIcon icon={faUsers} className="icon" />
              </div>
          </div>
      </section>

      <div></div>
      
      <section id="services" className="services">
        <h2 className='heading-with-line'>Our Services</h2>

        <div className="services-container">
          <div className="services-box">
            <img src= {construction} alt="" />
            <h3>Yamai Construction</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, sint.</p>
            <div className="services-layer">
              <h4>Construction</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt veniam, ipsum adipisci libero hic laboriosam porro ab sequi quia reprehenderit odit, illum omnis nulla voluptatem beatae excepturi. Laudantium, eius accusantium?</p>
              <button className='btn'>
                <Link to="/Construction">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={crusher} alt="" />
            <h3>Yamai Stone Crusher</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, sint.</p>
            <div className="services-layer">
              <h4>Crusher</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <button className='btn'>
                <Link to="/Crusher">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={bricks} alt="" />
            <h3>Yamai Bricks</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, sint.</p>
            <div className="services-layer">
              <h4>Bricks</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <button className='btn'>
                <Link to="/Bricks">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={agencies} alt="" />
            <h3>Shraddha Agencies</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, sint.</p>
            <div className="services-layer">
              <h4>Agencies</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <button className='btn'>
                <Link to="/Agencies">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={enterprises} alt="" />
            <h3>Shruti Enterprises</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, sint.</p>
            <div className="services-layer">
              <h4>Enterprises</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <button className='btn'>
                <Link to="/Enterprises">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div className="services-box">
            <img src={energy} alt="" />
            <h3>Yamai Enerygy</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, sint.</p>
            <div className="services-layer">
              <h4>Energy</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <button className='btn'>
                <Link to="/Energy">
                <span class="material-symbols-outlined">more_up</span>
                </Link>
              </button>
            </div>  
          </div>

          <div></div>

        </div>
      </section>
      
      <section id="testimonials" className='testimonials'>
        <h2 className='heading-with-line'>Testimonials</h2>
        <div className='testimonials-card'>
          <h1>What <span>Our Customers</span> are Saying</h1>
          <div>
            
          </div> 
        </div>
      </section>
    </section>
  );
};

export default Homepg;
