import React from "react";
import Footerpg from "../../Components/Footer/Footer";
import "./Construction.css";
import { Link } from "react-router-dom";
import house from '../Assets/house.jpeg';
import bridge from '../Assets/bridge.jpeg'

const Construction = () => {
  return (
    <div>
      <section>
        <div className="topimage">
          <div className="heading">
            <div className="title">
              <h3> Yamai construction</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                autem laboriosam totam quia voluptatibus inventore sed quos unde
                facilis quis fugit magnam maiores omnis culpa, ducimus dolorum
                velit laudantium. Nobis distinctio maiores nemo corporis?
              </p>
            </div>
          </div>
        </div>
        <div className="vision">
            
            <div class="container">
            <div class="row1">
            <div className="title"><h1>About us</h1></div>
            </div>
            <div class="row">
              <div class="about-img">
                <div class="img-box">
                  <img src={bridge} alt="about img" class="image" />
                </div>
              </div>
              <div class="about-text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur impedit similique corporis qui id a temporibus quis
                  quisquam, culpa, voluptatibus cupiditate nam ratione dolore
                  quidem laboriosam et adipisci ad eveniet aperiam sint modi.
                  Eligendi modi magni quod blanditiis delectus ab deleniti, odio
                  obcaecati voluptatem, laboriosam possimus pariatur eos, optio
                  cupiditate.
                </p>
                <br />
                <h3>Qualities of Our Company</h3>
                <div class="skills">
                  <div class="skill-item">Experience</div>
                  <div class="skill-item">Expertise</div>
                  <div class="skill-item">Skilled Workforce</div>
                  <div class="skill-item">Quality</div>
                  <div class="skill-item">Communication</div>
                  <div class="skill-item">Customer Satisfaction</div>
                  <div class="skill-item">Reputation</div>
                  <div class="skill-item">Integrity</div>
                </div>
               
  
  
               
                
               
              </div>
            </div>
          </div>
        </div>


        <div className="main">
        <div className="title"><h1>Our projects</h1></div>
        <div className="projects">
      
          <div className="card">
            <div className="image">
            <img src={house} alt="" />
            </div>
            <div className="content">
              <h4>house construction</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim.</p>

            </div>
          </div>
          <div className="card">
            <div className="image">
            <img src={house} alt="" />
            </div>
            <div className="content">
               <h4>house construction</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim.</p>
            </div>
          </div><div className="card">
          <div className="image">
          <img src={house} alt="" /></div>
          <div className="content">
          <h4>house construction</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim.</p>
          </div>
        </div>
        </div></div>
        

      </section>

      <Footerpg />
    </div>
  );
};

export default Construction;
