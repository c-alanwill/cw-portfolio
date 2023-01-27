import React from 'react';
import '../../styles/Main.css';
import '../../styles/Portfolio.css';
import PortfolioCard from './Card'
import { Row, Col, CardGroup } from 'react-bootstrap';


function Portfolio() {
  return (
    <div>
      <h1>Cory Williams</h1> 
      <h2 className='mainText'>My Portfolio</h2>
      <br>
      </br>
      <p className='mainText'>
        Below are some of my design and coding projects:
      </p>

      {/* <Container>
        <PortfolioCard />
      </Container> */}

        <div className="row">
        <CardGroup>
          <div className="img-container">
            <PortfolioCard />
          </div>
        </CardGroup>
        </div>
    </div>
    
  );
}

export default Portfolio;
