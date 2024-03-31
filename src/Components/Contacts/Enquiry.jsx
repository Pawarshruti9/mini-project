import React from 'react';
import './Enquiry.css'; // Import the CSS file

import Footerpg from '../Footer/Footer';
import { useState } from 'react';
import mixer1 from '../Assets/mixer1.jpg';


const ContactForm = () => {
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
                        <h2>Contact Us</h2>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    {submitted && <div className="success-message">Form submitted successfully!</div>}
                    </div>
                </div>
            <Footerpg/>
        </div>

    );
};

export default ContactForm;


