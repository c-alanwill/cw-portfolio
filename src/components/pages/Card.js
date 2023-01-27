import React from 'react';
import Projects from '../../projects.json';
import { Card, Button, Col, CardGroup } from 'react-bootstrap';

function PorfolioCard() {
  return (
    <>
      <CardGroup>
      {Projects.map(((project) => (
        <Col xs={12} md={6} lg={4}>
          <Card style={{ marginLeft: '18px', marginRight: '18px', marginBottom: '36px' }}>
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
              <Card.Img variant="top" src={project.image} />
              </a>
              <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.paragraph}
              </Card.Text>
              <Button target="_blank" rel="noopener noreferrer" href={project.repo}variant="primary">Github Repository</Button>
              </Card.Body>
          </Card>
        </Col>
        )))}
      </CardGroup>
    </>
  );
}

export default PorfolioCard;