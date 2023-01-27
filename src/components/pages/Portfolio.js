import React from 'react';
import '../../styles/Main.css';
import PortfolioCard from './Card';


function Portfolio() {
  return (
    <div>
      <br>
      </br>
      <h2 className='mainText'>My Portfolio</h2>
      <br>
      </br>
      <h5 className='mainText'>
        Below are some of my coding projects:
      </h5>
      <br>
      </br>
        <div className="row">
          <div>
            <PortfolioCard />
          </div>
        </div>
    </div>
    
  );
}

export default Portfolio;
