import React from 'react';
import '../styles/Main.css';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
  <>
    <Navbar bg="primary" variant="dark" >
        <Navbar.Brand style={{marginLeft: '18px'}}>Cory Williams Developer Portfolio</Navbar.Brand>
    </Navbar>
  </>
  )
}

export default Header;