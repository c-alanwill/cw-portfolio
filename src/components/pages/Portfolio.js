import React from 'react';
import '../../styles/Main.css';
import '../../styles/Portfolio.css';
import PortfolioCard from './Card'
// import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

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
          <div className="img-container">
              <PortfolioCard />
          </div>
        </div>
  

      {/* <a href="https://fuuko08.github.io/Group04-Translator-Comparison-Web-App/" 
      id="translator" className="img-container">
      <img className="my-5"src="./Assets/translator.png" alt="A translator app"/>
      </a> */}


        {/* <a href="https://github.com/c-alanwill?tab=repositories">
        <i class="fa-brands fa-github display-6"></i>
        </a> */}
      
      {/* <a href="https://bookaholicbootcampselina.herokuapp.com/"
      id="bookaholics" className="img-container">
      <img src="./Assets/bookaholics.png" alt="A stack of books representing bookaholics login page"/>
      </a>

      <a href="https://c-alanwill.github.io/coding-quiz/" 
      id="translator" className="img-container">
      <img className="my-5" src="./Assets/coding-quiz-challenge.png" alt="A coding-quiz-app"/>
      </a>
      
      <a href="https://c-alanwill.github.io/Javascript-password-generator/"
      id="bookaholics" className="img-container">
      <img src="./Assets/password-generator.png" alt="A password generator app"/>
      </a>

      <a href="https://c-alan-note-taker.herokuapp.com/" 
      id="translator" className="img-container">
      <img className="my-5" src="./Assets/note-taker.png" alt="A note taking app"/>
      </a>
      
      <a href="https://pwa-text-editor-cw.herokuapp.com/"
      id="bookaholics" className="img-container">
      <img src="./Assets/pwa-app.png" alt="A PWA app"/>
      </a> */}

    </div>
  );
}

export default Portfolio;
