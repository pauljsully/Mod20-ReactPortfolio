import { Col } from "react-bootstrap";
import GitHubLogo from '../../assets/github.png'; // Import your GitHub logo

export const ProjectCard = ({ title, description, imageUrl, deployLink, githubLink }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <a href={deployLink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
        <div className="proj-imgbx">
          <img src={imageUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: '8px', color: 'white', textDecoration: 'none' }}>
        <img src={GitHubLogo} alt="GitHub Logo" style={{ width: '30px', height: '30px', marginRight: '8px' }} /></a>
          </div>
        </div>
        <span className="visually-hidden">{title} - View details</span>
      </a>
    </Col>
  );
};


