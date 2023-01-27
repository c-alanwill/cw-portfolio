import React from 'react';
import '../../styles/Portfolio.css';
import Projects from '../../projects.json';
import { Card, Button, Col, CardGroup } from 'react-bootstrap';

function PorfolioCard() {
  return (
    <>
      <CardGroup>
      {Projects.map(((project) => (
        <Col xs={12} md={6} lg={4}>
          <Card style={{ marginRight: "20px", marginBottom: '20px' }}>
              <a target="_blank" href={project.url}>
              <Card.Img variant="top" src={project.image} />
              </a>
              <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.paragraph}
              </Card.Text>
              <Button href={project.repo}variant="primary">Github Repository</Button>
              </Card.Body>
          </Card>
        </Col>
      )))}
      </CardGroup>
    </>
  );
}

export default PorfolioCard;