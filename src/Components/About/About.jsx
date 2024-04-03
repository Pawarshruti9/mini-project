import React, { useEffect , useState } from 'react';
import "./About.css"
import Footerpg from '../Footer/Footer';
import mixer1 from '../Assets/mixer1.jpg';
import site from '../Assets/site.jpg';
import rod from '../Assets/rod.jpg';
import cement from '../Assets/cement.jpg';
import mixer from '../Assets/mixer.jpg'
import { data } from "./Accordion/data";
import { Accordion } from "./Accordion/Accordion";

const Aboutus = () => {

return (
      <div>
        <div className='aboutcompany'>
          <div className='aboutcontent'>
            <div className='aboutimage'>
              <div className='centered'>
                <h2>Yamai Group</h2>
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
            <div class='missionimage'>
              <img class='img2' src={site} alt="" />
              <div class="img3-container">
                <img class='img3' src={rod} alt="" />
                <img class='img3' src={cement} alt="" />
              </div>
            </div>

          </div>
          
          <div className='aboutvision'>
            <div className='visionimage'>
              <img className='img2' src={mixer1} alt="" />
            </div>
            <div className='visioncontent'>
              <h3>Our Vision</h3>
              <p>Our vision is to be a leading construction company known for our commitment to quality, safety, and sustainability. We aim to set new standards of excellence in the construction industry, continuously evolving and adapting to meet the changing needs of our clients and the environment.
              </p>
              <p>At ABC Construction, our mission is simple: to exceed our clients' expectations by delivering superior craftsmanship, innovative solutions, and unparalleled customer service. We strive to build lasting relationships with our clients, suppliers, and subcontractors based on integrity, transparency, and mutual respect. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem numquam quos id possimus ullam animi repudiandae eaque ea aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit cumque!
              </p>
            </div>
          </div>

          <div className='aboutgoal'>
            <div className='container'>
              <h4>Expert Worker</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente voluptas adipisci nemo vitae! Modi atque ipsam quae minima reiciendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi alias illum nobis! Consequatur amet placeat minima quam fugit dolorem reprehenderit odio quibusdam, rerum dicta pariatur dolor debitis itaque neque.</p>
            </div>
            <div className='container'>
              <h4>Quality Work</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente voluptas adipisci nemo vitae! Modi atque ipsam quae minima reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloribus illo eum dicta vero placeat perspiciatis molestiae, eveniet iure soluta natus, id exercitationem asperiores quas doloremque ipsa provident quos repellat!  </p>
            </div>
            <div className='container'>
              <h4>24/7 Support</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente voluptas adipisci nemo vitae! Modi atque ipsam quae minima reiciendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat veniam numquam vitae? Quam veniam quos libero nobis, quasi dolores quae repudiandae. Unde ad dicta fuga nihil explicabo, quae tempore.</p>
            </div>
          </div>
          
          <div className='aboutservices'>
            <div className='servicescontent'>
              <h3>Our Services</h3>
              {data.map((section, index) => (
                <Accordion key={index} section={section} />
              ))}
            </div>
            <div className='servicesimage'>
              <img src={mixer} alt="" />
            </div>
          </div>

          <div className='aboutimp'>
            <div className='imp1'>
              <h3>Why Choose ABC Construction?</h3>
                <div className='bullet'>
                  <ul>
                    <li>Experienced Team: Our team of skilled professionals brings years of experience and expertise to every project.</li>
                    <li>Quality Craftsmanship: We are dedicated to delivering superior craftsmanship and exceptional results that stand the test of time.</li>
                    <li>Customer-Centric Approach: We prioritize open communication, collaboration, and customer satisfaction throughout the construction process.</li>
                    <li>Safety First: Safety is our top priority, and we adhere to the highest standards of safety protocols to ensure a secure working environment for all.</li>
                  </ul>
              </div>
            </div>

            <div className='imp2'>
              <h3>Our Infrastructure</h3>
              <p>
              We are authoritative in designing the qualitative signboard and nameplate and are well-integrated work set up is our key to growth. Our infrastructure is scattered over a large area. Our manufacturing units are parted into manufacturing, packaging, designing, transportation, and distribution units that are headed by trained professionals.
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quaerat debitis explicabo cum facere? Ipsam laboriosam quasi perspiciatis nostrum inventore deserunt odio blanditiis esse eaque ullam. Distinctio totam, laboriosam minima quo esse rem ipsum pariatur.</p>
            </div>
            <div className='imp3'>
              <h3>Contact Us</h3>
              <p>Ready to embark on your next construction project? Contact ABC Construction today to learn more about our services and how we can bring your vision to life. Let's build something incredible together!
              </p>
              <div className='info'>
                <div className='icon'>
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div className='name'>
                163/3 Venkatesh Appartment Saat Rasta Railway Lines Solapur, Maharashtra, 413001 India 
                </div> 
              </div>
              <div className='info'>
                <div className='icon'>
                <span class="material-symbols-outlined">mail</span>
                </div>
                <div className='name'>
                  yamaigroup99@gmail.com
                </div>
              </div> <br />
              <div className='info'>
                <div className='icon'>
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div className='name'>
                   095613 34999 
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
        <Footerpg/>
    </div>
);
};

export default Aboutus;
