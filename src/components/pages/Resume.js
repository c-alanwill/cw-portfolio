import React from 'react';
import '../../styles/Main.css';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div>
      <h1>Cory Williams</h1> 
      <h2 className='mainText'>My Resume</h2>
      <br>
      </br>
      <a className="mx-4" href="/Assets/cory-resume.pdf">Download Resume</a>
      <div className='mainText'>
          <h5 id="company">Alternative Rentals, Inc.</h5>
          Founder & CEO
          <br></br>
          2004 - Current
          <br></br>
          <br></br>
          Alternative Rentals rents camera equipment to films, television shows and more.
          <br></br>
          The company has facilities in Los Angeles, CA and Atlanta, GA.
          <br></br>
          Started company in 2004 and served as the CEO since the opening.
          <br></br>
          <br></br>
          <br></br>
       
          <h5 id="company">BY Media, Inc.</h5>
          Founder & CEO
          <br></br>
          2012 - Current
          <br></br>
          <br></br>
          A start-up tech company that I began a number of years ago.
          <br></br>
          The company is building an innovative web applicaton set to launch in 2023.
          <br></br>
          I do all of the product design and UI / UX.
          <br></br>
          I come up with site features and review workflow, adding issues to GitHub.
          <br></br>
          Oversee a CTO and finances.
          <br></br>
          <br></br>
          <br></br>

          <h5 id="company">Full-Stack Developer</h5>
          UCLA Full-Stack Coding Bootcamp
          <br></br>
          2022 - Current
          <br></br>
          <br></br>
          In process of taking the UCLA Full-Stack Bootcamp course.
          <br></br>
          Learning all phases of full stack development for coding web applications.
          <br></br>
          Skills learned include HTML, CSS, JavaScript, Node.js, MySQL and React.
          <br></br>
           Learned GitHub for Version control. 
          <br></br>
        
      </div>
    </div>
  );
}
