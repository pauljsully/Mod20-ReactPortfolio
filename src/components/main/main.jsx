import React from 'react'
import '../../css/main.css';
import paul from '../../assets/paul.png';

const Main = () => {
  return (
    <section id='main'>
        <div className='mainContent'>
            <span className="hello">Hello, </span>
            <span className="mainText">I am <span className="mainName">Paul Sullivan</span> <br />Full-Stack Developer</span>
            <p className="mainPara">I am a juinoor developer skilled in ...</p>
        </div>
        <img src={paul} alt='paulImg' className='paulImg'></img>
    </section>
  )
}

export default Main
