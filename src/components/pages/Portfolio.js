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
      <img className="my-5"src="./Assets/translator.png" alt="the translator app"/>
      </a>
      <a href="https://bookaholicbootcampselina.herokuapp.com/"
      id="bookaholics" className="img-container">
      <img src="./Assets/bookaholics.png" alt="A stack of books representing bookaholics login page"/>
      <a href="https://github.com/c-alanwill?tab=repositories">
      <i class="fa-brands fa-github display-6"></i>
      <div class="card text-bg-dark">
  <img src="/Assets/github.png" class="w-20 card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
  </a>
      </a>
      <a href="https://fuuko08.github.io/Group04-Translator-Comparison-Web-App/" 
      id="translator" className="img-container">
      <img className="my-5"src="./Assets/translator.png" alt="the translator app"/>
      </a>
      <a href="https://bookaholicbootcampselina.herokuapp.com/"
      id="bookaholics" className="img-container">
      <img src="./Assets/bookaholics.png" alt="A stack of books representing bookaholics login page"/>
      </a>
    </div>
  );
}
