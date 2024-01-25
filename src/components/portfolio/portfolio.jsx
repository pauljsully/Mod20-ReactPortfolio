import React from 'react';
import './portfolio.css';
import GitHub from '../../assets/github.png';
import Deployed from '../../assets/deployed.png';
import PatientPlus from '../../assets/PatientPlus.png';
import DietNinja from '../../assets/DietNinja.png'
import Weather from '../../assets/weatherapp.png';
import Question from '../../assets/question.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Daily Weather App',
      imageSrc: Weather,
      githubLink: 'https://github.com/pauljsully/Mod6-DailyWeather.git',
    },
    {
      title: 'Diet Ninja',
      imageSrc: DietNinja,
      githubLink: 'https://github.com/TheYenMan/project-1-dietninja-main.git',
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
    },
  ];

  return (
    <section id='apps'>
      <h2 className="portfolioTitle">My Portfolio</h2>

      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="projectDetails">
              <h3>{project.title}</h3>

              <div className='projectImg'>
                <img src={project.imageSrc} alt={project.title} />
              </div>

              <div className="links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img src={GitHub} alt="GitHub" />
                </a>
                {project.deployLink && (
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                    <img src={Deployed} alt="Deployed" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


