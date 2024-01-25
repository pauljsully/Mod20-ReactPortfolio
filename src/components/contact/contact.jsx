import React from 'react'
import './contact.css';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';

const Contact = () => {
  return (
    <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to reach out.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="email" className="email" placeholder='Your Email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Say something here'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={GitHub} alt="Github" className='link'/>
                <img src={Instagram} alt="insta" className='link' />
            </div>
            </form>
    </div>
  )
}

export default Contact
