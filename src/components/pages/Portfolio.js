import React from 'react';
import '../../styles/Main.css';
import '../../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <h1>Cory Williams</h1> 
      <h2 className='mainText'>My Portfolio</h2>
      <br>
      </br>
      <p className='mainText'>
        Below are some of my design and coding projects:
      </p>
      <a href="https://fuuko08.github.io/Group04-Translator-Comparison-Web-App/" 
      id="translator" className="img-container">
      <img src="cw-portfolio/Assets/translator.png" alt="the translator app"/>
      </a>
      <a href="https://bookaholicbootcampselina.herokuapp.com/"
      id="bookaholics" className="img-container">
      <img src="cw-portfolio/Assets/bookaholics.png" alt="A stack of books representing bookaholics login page"/>
      </a>
    </div>
  );
}
