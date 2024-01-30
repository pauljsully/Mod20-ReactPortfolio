import React from 'react';
import { ProjectCard } from './projects';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './portfolio.css';
import PatientPlus from '../../assets/PatientPlus.gif';
import DietNinja from '../../assets/DietNinja.png';
import Weather from '../../assets/weatherapp.png';
import Question from '../../assets/question.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Patient +',
      imageUrl: PatientPlus,
      githubLink: 'https://github.com/pauljsully/Project2-patientPlus',
      deployLink: 'https://patientplusportal-ec99a88081f0.herokuapp.com/',
    },
    {
      title: 'Daily Weather App',
      imageUrl: Weather,
      githubLink: 'https://github.com/pauljsully/Mod6-DailyWeather.git',
    },
    {
      title: 'Diet Ninja',
      imageUrl: DietNinja,
      githubLink: 'https://github.com/TheYenMan/project-1-dietninja-main.git',
    },
    {
      title: 'Coming Soon',
      imageUrl: Question,
    },
    {
      title: 'Coming Soon',
      imageUrl: Question,
    },
    {
      title: 'Coming Soon',
      imageUrl: Question,
    },
  ];

  return (
    <>
      <h2 className="portfolioTitle">My Portfolio</h2>

      <section className="project" id="projects">
        <Container style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                    <Row>
                      {projects.map((project, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                          <ProjectCard {...project} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
