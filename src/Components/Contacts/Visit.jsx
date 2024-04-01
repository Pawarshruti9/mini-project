import React from 'react';
import Footerpg from '../Footer/Footer';
import { useState } from 'react';
import mixer1 from '../Assets/mixer1.jpg';
import "./Visit.css"


const Visit = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <div className='contactcontent'>
                <div className='contactimage'>
                    <img className='img2' src={mixer1} alt="" />
                    <div className='content'>
                        <div className='paragraph'>
                            <h3>Yamai Group of Construction</h3>
                            <p>Feel free to contact us regarding your project, we would love to hear from you.</p>
                        </div>
                        <div className='information'>
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
                            </div>
                            <div className='info'>
                                <div className='icon'>
                                    <span class="material-symbols-outlined">call</span>
                                </div>
                                <div className='name'>
                                    095613 34999 
                                </div>
                            </div>
                            <div className='info'>
                                <div className='icon'>
                                    <span class="material-symbols-outlined">apartment</span>
                                </div>
                                <div className='name'>
                                    095613 34999 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Visit Us</h2>
                        <div className="inline-inputs">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name1" name="name1" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="inline-inputs">
                            <div>
                                <label htmlFor="date">Date:</label>
                                <input type="date" id="date" name="date" required />
                            </div>
                            <div>
                                <label htmlFor="service">Select a Service:</label>
                                <select id="service" name="service">
                                    <option value="service1">Yamai Construction</option>
                                    <option value="service2">Yamai Bricks</option>
                                    <option value="service3">Yamai Energy</option>
                                    <option value="service3">Yamai Stone Crusher</option>
                                    <option value="service3">Shruti Enterprises</option>
                                    <option value="service3">Shraddha Agencies</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Company name:</label>
                            <input type="company" id="company" name="company" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required />
                        </div>
                        
                        <button type="submit">Submit</button>
                        {submitted && <div className="success-message">Form submitted successfully!</div>}
                    </form>
                </div>
            </div>
            <Footerpg/>
        </div>
    );
};

export default Visit;
