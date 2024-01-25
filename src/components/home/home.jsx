import React from 'react'
import './home.css';
import paul from '../../assets/paul.png';

const Home = () => {
  return (
    <section id='main'>
        <div className='mainContent'>
            <span className="hello">Hello, </span>
            <span className="mainText">I am <span className="mainName">Paul Sullivan</span> <br />Full-Stack Developer</span>
            <p className="mainPara">I am a juinor developer skilled in HTML/CSS,<br/> JavaScript/jQuery, 
React.js, MySQL, MongoDB,<br/> and MERN stack</p>
        </div>
        <img src={paul} alt='paulImg' className='paulImg'></img>
    </section>
  )
}

export default Home
