// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skillsData = [
  { name: 'Miro Design', percentage: 98 },
  { name: 'Notion', percentage: 95 },
  { name: 'Figma Design', percentage: 92 },
  { name: 'HTML5', percentage: 98 },
  { name: 'CSS3', percentage: 95 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 95 },
  { name: 'Next.js', percentage: 90 },
  { name: 'Node.js', percentage: 92 },
  { name: 'Vue', percentage: 85 },
  { name: 'Angular', percentage: 80 },
  { name: 'Github', percentage: 95 },
];

const workExperience = [
  {
    company: 'Your Company',
    position: 'Web Developer',
    startDate: 'January 2022',
    endDate: 'Present', // 'Present' if currently working
    description: 'Brief description of your responsibilities and achievements.',
  },
  // Add more work experience entries as needed
];

const githubContributions = [
  {
    repository: 'YourRepository',
    contributions: 50, // Number of contributions
    link: 'https://github.com/yourusername/YourRepository', // Link to the GitHub repository
  },
  // Add more GitHub contribution entries as needed
];

const Skills = () => {
  return (
    <Container className="mt-5 " style={{paddingTop:"8rem", paddingBottom:"10rem"}}>
      <h1 className="text-center mb-5">Skills</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {skillsData.map((skill, index) => (
          <Col key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="text-center">
                  <h3>{skill.name}</h3>
                  <div className="progress mt-3">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: `${skill.percentage}%` }}
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.percentage}%
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h1 className="text-center mb-5 mt-5">Work Experience</h1>
      {workExperience.map((experience, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <h3>{experience.position}</h3>
            <p className="text-muted">
              {experience.company} | {experience.startDate} - {experience.endDate}
            </p>
            <p>{experience.description}</p>
          </Card.Body>
        </Card>
      ))}

      <h1 className="text-center mb-5 mt-5">GitHub Contributions</h1>
      {githubContributions.map((contribution, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <h3>
              <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                {contribution.repository}
              </a>
            </h3>
            <p>{contribution.contributions} contributions</p>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Skills;
