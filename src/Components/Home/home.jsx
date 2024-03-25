import React from 'react';
import './home.css';
import Construct from '../../Components/Assets/Construction.jpeg';

const Homepg = () => {
  return (
    <div className="maincontainer">
       <div className="home-container">
      
      <div className="centered">
      <h1>Welcome to Our Website</h1>
      <p>Discover amazing content and services</p>
      
      <button>Explore</button>
      </div>
     
    </div>
     <div className='aboutus'>
      <h2>About Us</h2> 
     <div className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis voluptatum perspiciatis nisi voluptatem ab assumenda debitis saepe dolores quaerat temporibus dolor pariatur, delectus deserunt, suscipit vel eligendi vero nulla qui! Quidem iste consequuntur maiores.</div>
     <div className='sideimage'>
       <img src="" alt="" />
     </div>
   </div>
    </div>
   
  );
};

export default Homepg;