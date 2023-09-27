import React from 'react';
import './styles/Navbar.css'
import homeIcon from './images/home-icon.svg'

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li><img src={homeIcon} alt='home icon'></img></li>
      </ul>
    </div>
  );
}

export default Navbar;
