import React from 'react';
import '../styles/Main.css';

// Footer Function
function Footer() {
  return <footer className="d-flex justify-content-center my-5">
  <a className="mx-4 footer-link-color" href="https://www.linkedin.com/in/cory-williams-3150b714/">
    <i className="fa-brands fa-linkedin display-6"></i>
  </a>

  <a className="mx-4 footer-link-color" href="https://github.com/c-alanwill?tab=repositories">
    <i className="fa-brands fa-github display-6"></i>
  </a>
  
  <a className="mx-4 footer-link-color" href="https://twitter.com/altrent123">
    <i className="fa-brands fa-twitter display-6"></i>
  </a>
  </footer>
}

export default Footer;