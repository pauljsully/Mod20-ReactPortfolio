import React from 'react';
import './resume.css';
import resumeImage from './resume2024.png';
import { saveAs } from 'file-saver';

const Resume = () => {
  const downloadResume = () => {
    // Trigger the download using FileSaver.js
    saveAs(resumeImage, 'resume2024.png');
  };

  return (
    <div>
      <div id="resume-container">
        <h1>Paul Sullivan</h1>
      <br />
        <h2>Skills</h2>
      <br />
        <ul>
          <li>Project Management</li>
          <li>Browser Based Technologies: HTML/CSS, JavaScript/jQuery, Local Storage, Session Storage, IndexedDB</li>
          <li>Framework/Libraries: React.js, Node.js, Express.js, Bootstrap</li>
          <li>Databases: MySQL, MongoDB, Mongoose</li>
          <li>Other: Git, GitHub, Restful API, Heroku</li>
        </ul>

        <h2>Projects</h2>
      <br />
        <h3>Patient+</h3>
          <ul>
            <li>Build an application that allows you as a patient provider to access sensitive 
              patient information upon logging in to your portal.</li>
            <li>Be able to sign in to my specific portal using a username and password.</li>
          </ul>
      <br />
        <h3>Diet Ninja - MyFitnessPal Dupe</h3>
          <ul>
            <li>Build an application that allows you track calorie intake and calories burned 
              for the day</li>
            <li>Help reach or maintain individual fitness goals of a user. There will be 
              resources available for users to use in conjunction with achieving health goals.</li>
          </ul>

        <h2>Education</h2>
        <br />
        <h3>B.S - University of Maryland - 2021</h3>
        <p>College Park, MD</p>
        <h3>Certificate - George Washington University - 2024</h3>
        <p>Washington DC</p>

        <h2>Work Experience</h2>
        <br />
        <h3>Patient Care Technician - Mount Washington Pediatric Hospital - 2020-2024</h3>
        <br />
        <ul>
          <li>Explained treatment procedures to patients and their families.</li>
          <li>Assisted nurses with wound care for pressure ulcers, bed sores and surgical site wounds.</li>
          <li>Instructed new employees on proper techniques of performing daily tasks.</li>
          <li>Assisted in preparing patients for examinations and treatments, including vital signs monitoring.</li>
          <li>Observed changes in patient's conditions and reported any abnormalities to the RN on duty.</li>
        </ul>
      </div>

      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
};

export default Resume;
