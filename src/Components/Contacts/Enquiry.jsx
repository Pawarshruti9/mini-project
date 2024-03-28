import React, { useState , useEffect} from 'react';
import './Enquiry.css'; // Import the CSS file
import emailjs from 'emailjs-com';

const Enquiry = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send({
      Host : "smtp.gmail.com",
      Username : "shruti.pawar9099@gmail.com",
      Password : "Pawar@909999",
      To : 'shruti.pawar9099@gmail.com',
      From : formData.email,
      Subject : "New enquiry from website",
      Body : `Name: ${formData.name} <br/> Email: ${formData.email} <br/> Message: ${formData.message}`
    }).then(
      message => {
        console.log(message);
        setFormData({ name: '', email: '', message: '' }); // Clear form fields after submission
        setSubmitted(true);
      }
    ).catch(error => console.error(error));
  };


  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && <div className="success-message">Form submitted successfully!</div>}
    </div>
  );
}

export default Enquiry;
