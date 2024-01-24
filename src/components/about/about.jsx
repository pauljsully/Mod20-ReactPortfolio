import React from 'react'
import './about.css';
import BBTech from '../../assets/bbtech.png';
import serverDev from '../../assets/serverdev.png'


const About = () => {
  return (
    <section id='about'>
<span className="aboutTitle">About Me </span> <br/>

<span className="aboutDesc">Dedicated and adaptable professional with over four 
years of experience in healthcare and a recent transition to a career in technology 
through the GWU Full Stack Coding Bootcamp. Proficient in HTML/CSS, JavaScript/jQuery, 
React.js, MySQL, MongoDB, and MERN stack, I bring a unique blend of healthcare expertise 
and coding skills. My background highlights a commitment to continuous learning, problem-solving, 
and effective communication. Eager to apply my diverse skill set to a junior developer position, 
I am well-equipped to contribute innovative solutions and thrive in dynamic, collaborative environments.</span>

<div className="aboutCards">
    <div className="aboutCard">
        <img src={BBTech} alt="BBTech" className='aboutImg'/>
        <div className="aboutText">
            <h2>Browser Based Technologies</h2>
            <p>This will eventually have text</p>
        </div>
    </div>
    <div className="aboutCard">
        <img src={serverDev} alt="serverDev" className='aboutImg'/>
        <div className="aboutText">
            <h2>Server Side Development and Databases</h2>
            <p>This will eventually have text.</p>
        </div>
    </div>
</div>
    </section>
  )
}

export default About
