import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import construction from '../Assets/construction.jpg';
import crusher from '../Assets/crusher.jpg';
import bricks from '../Assets/bricks.jpg';
import agencies from '../Assets/agencies.jpg';
import enterprises from '../Assets/enterprises.jpg';
import energy from '../Assets/energy.jpg';
import about from '../Assets/about.jpg'
// import Construct from '../../Components/Assets/Construction.jpeg';

const Homepg = () => {
  return (
    <div className="maincontainer">
      <section className="home-container">
        <div className="centered">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing content and services</p>
          <button>Explore</button>
        </div>
      </section>

      <div></div>

      <section id='about' className='aboutus'>
        <h2><u>About Us</u></h2>
        <div className='about-container'>
          <div className='about-content'>
            <div className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis voluptatum perspiciatis nisi voluptatem ab assumenda debitis saepe dolores quaerat temporibus dolor pariatur, delectus deserunt, suscipit vel eligendi vero nulla qui! Quidem iste consequuntur maiores.
            </div>
            <div className='para2'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vero.</p>
            </div>
            <div className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis voluptatum perspiciatis nisi voluptatem ab assumenda debitis saepe dolores.
            </div>
            <div className="btn">
              <button><Link to="/about">Know More</Link></button>
            </div>
          </div>
          <div className="about-image"><img src='' alt="" /></div>
        </div>
      </section>

      <div></div>
      
      <section id='services' className="services">
        <h2><u>Our Services</u></h2>

        <div className="services-container">
          <div className="services-box">
            <img src= {construction} alt="" />
            <h3>Yamai Construction</h3>
            <div className="services-layer">
              <h4>Construction</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt veniam, ipsum adipisci libero hic laboriosam porro ab sequi quia reprehenderit odit, illum omnis nulla voluptatem beatae excepturi. Laudantium, eius accusantium?</p>
              <Link to="/Construction">
                <a href="#"><i className="bx bx-link-external"></i></a>
              </Link>

            </div>  
          </div>

          <div className="services-box">
            <img src={crusher} alt="" />
            <h3>Yamai Stone Crusher</h3>
            <div className="services-layer">
              <h4>Crusher</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <Link to="/Crusher">
                <a href="#"><i className="bx bx-link-external"></i></a>
              </Link>
            </div>  
          </div>

          <div className="services-box">
            <img src={bricks} alt="" />
            <h3>Yamai Bricks</h3>
            <div className="services-layer">
              <h4>Bricks</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <Link to="/Bricks">
                <a href="#"><i className="bx bx-link-external"></i></a>
              </Link>
            </div>  
          </div>

          <div className="services-box">
            <img src={agencies} alt="" />
            <h3>Shraddha Agencies</h3>
            <div className="services-layer">
              <h4>Agencies</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <Link to="/Agencies">
                <a href="#"><i className="bx bx-link-external"></i></a>
              </Link>
            </div>  
          </div>

          <div className="services-box">
            <img src={enterprises} alt="" />
            <h3>Shruti Enterprises</h3>
            <div className="services-layer">
              <h4>Enterprises</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <Link to="/Enterprises">
                <a href="#"><i className="bx bx-link-external"></i></a>
              </Link>
            </div>  
          </div>

          <div className="services-box">
            <img src={energy} alt="" />
            <h3>Yamai Enerygy</h3>
            <div className="services-layer">
              <h4>Energy</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reiciendis mollitia ut autem? Possimus delectus quis cum velit rerum temporibus explicabo consequuntur. Enim, quae voluptatibus veniam amet sapiente consequuntur ex.</p>
              <Link to="/Energy">
                <a href="#"><i className="bx bx-link-external"></i></a>
              </Link>
            </div>  
          </div>

          <div></div>

        </div>
      </section>

    </div>
  );
};

export default Homepg;
