import React from 'react';
import '../../styles/Portfolio.css';
import Projects from '../../projects.json';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function PorfolioCard() {
  return (
    <>
      {Projects.map(((project) => (
        // <p>{project.title}</p>
        <Card style={{ width: '18rem' }}>
            <a target="_blank" href={project.url}>
            <Card.Img variant="top" src={project.image} />
            </a>
            <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.paragraph}
            </Card.Text>
            <Button href={project.repo}variant="primary">Github</Button>
            </Card.Body>
        </Card>
      )))}
    
    </>
  );
}

export default PorfolioCard;