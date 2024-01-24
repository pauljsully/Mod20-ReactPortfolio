import React from 'react';
import '../../css/portfolio.css';
import GitHub from '../../assets/github.png';
import Deployed from '../../assets/deployed.png';
import PatientPlus from '../../assets/PatientPlus.png';
import DietNinja from '../../assets/DietNinja.png'
import Weather from '../../assets/weatherapp.png';
import Question from '../../assets/question.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather App',
      imageSrc: Weather,
      githubLink: 'https://github.com/yourusername/project1',
      deployLink: 'https://yourdeployedlinkforproject1.com',
    },
    {
        title: 'Diet Ninja',
        imageSrc: DietNinja,
        githubLink: 'https://github.com/yourusername/project1',
        deployLink: 'https://yourdeployedlinkforproject1.com',
    },
    {
        title: 'Patient +',
        imageSrc: PatientPlus,
        githubLink: 'https://github.com/pauljsully/Project2-patientPlus',
        deployLink: 'https://patientplusportal-ec99a88081f0.herokuapp.com/',
    },
    {
        title: 'Coming Soon',
        imageSrc: Question,
        githubLink: 'https://github.com/yourusername/project1',
        deployLink: 'https://yourdeployedlinkforproject1.com',
    },

  ];

  return (
    <section id='apps'>
      <h2 className="portfolioTitle">My Portfolio</h2>

      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>

            <div>
                <img src={project.imageSrc} alt={project.title} />
            </div>

          <div className="links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
              <img src={Deployed} alt="Deployed" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;

