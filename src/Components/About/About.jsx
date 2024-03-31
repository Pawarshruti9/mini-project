import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"
import Footerpg from '../Footer/Footer';
import rod from '../Assets/rod.jpg';
import mixer1 from '../Assets/mixer1.jpg';
import mixer2 from '../Assets/mixer2.jpg';
import site from '../Assets/site.jpg';

const Aboutus = () => {
return (
      <div>
        <div className='aboutcompany'>
          <div className='aboutcontent'>
            <div className='aboutimage'>
              <div className='centered'>
                <h2>Yamai Construction</h2>
                <p>Welcome to ABC Construction, where innovation meets excellence in construction services. Established in [Year], ABC Construction has been a trusted name in the industry, delivering high-quality construction solutions across a diverse range of projects. From residential developments to commercial complexes, we specialize in turning your vision into reality.</p>
              </div>
            </div>
            

          <div className='aboutmission'>
            <div className='missioncontent'>
              <h3>Our Mission</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aliquid repellat optio saepe quas aliquam, ad blanditiis rem nam voluptatibus facilis consectetur sed, maxime soluta harum, similique repellendus numquam. Ea commodi repellendus vero! Beatae, provident rem aliquid veniam doloremque debitis!
              </p>
              <p>At ABC Construction, our mission is simple: to exceed our clients' expectations by delivering superior craftsmanship, innovative solutions, and unparalleled customer service. We strive to build lasting relationships with our clients, suppliers, and subcontractors based on integrity, transparency, and mutual respect. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem numquam quos id possimus ullam animi repudiandae eaque ea aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit cumque!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque odio, eligendi similique quisquam officia. Lorem ipsum, dolor sit amet consectetur adipisicing elit.                
              </p>
            </div>
            <div className='missionimage'>
              <img className='img2' src={site} alt="" />
            </div>
          </div>
          
          <div className='aboutvision'>
            <div className='visionimage'>
              <img className='img2' src={site} alt="" />
            </div>
            <div className='visioncontent'>
              <h3>Our Vision</h3>
              <p>Our vision is to be a leading construction company known for our commitment to quality, safety, and sustainability. We aim to set new standards of excellence in the construction industry, continuously evolving and adapting to meet the changing needs of our clients and the environment.
              </p>
              <p>At ABC Construction, our mission is simple: to exceed our clients' expectations by delivering superior craftsmanship, innovative solutions, and unparalleled customer service. We strive to build lasting relationships with our clients, suppliers, and subcontractors based on integrity, transparency, and mutual respect. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem numquam quos id possimus ullam animi repudiandae eaque ea aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit cumque!
              </p>
            </div>
          </div>

          <div>
            <h3>Our Services</h3>
            <ul>
              <li>General Contracting: From project inception to completion, we oversee every aspect of the construction process with precision and expertise.</li>
              <li>Design-Build: Streamline your project by combining the design and construction phases into one seamless process, saving time and resources.</li>
              <li>Construction Management: Our experienced team provides professional construction management services, ensuring efficient project delivery within budget and on schedule.</li>
              <li>Renovation and Remodeling: Transform existing spaces into functional and aesthetically pleasing environments with our renovation and remodeling services.</li>
              <li>Green Building Solutions: We are committed to sustainable construction practices, offering green building solutions to minimize environmental impact and maximize energy efficiency.</li>
            </ul>
          </div>

          <div>
            <h3>Why Choose ABC Construction?</h3>
            <ul>
              <li>Experienced Team: Our team of skilled professionals brings years of experience and expertise to every project.</li>
              <li>Quality Craftsmanship: We are dedicated to delivering superior craftsmanship and exceptional results that stand the test of time.</li>
              <li>Customer-Centric Approach: We prioritize open communication, collaboration, and customer satisfaction throughout the construction process.</li>
              <li>Safety First: Safety is our top priority, and we adhere to the highest standards of safety protocols to ensure a secure working environment for all.</li>
            </ul>
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>Ready to embark on your next construction project? Contact ABC Construction today to learn more about our services and how we can bring your vision to life. Let's build something incredible together!</p>
            {/* Include contact information */}
          </div>
          </div>
        </div>
        <Footerpg/>
    </div>
);
};

export default Aboutus;
