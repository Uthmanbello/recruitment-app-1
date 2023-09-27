import React from 'react';
import './styles/Navbar.css'
import profilePic from './images/profile-pic.png'
import homeIcon from './images/home-icon.svg';
import peopleIcon from './images/people-icon.svg';
import taskIcon from './images/task-icon.svg';
import shareIcon from './images/share-icon.svg';
import fileIcon from './images/file-icon.svg';
import recordIcon from './images/record-icon.svg';
import heartIcon from './images/heart-icon.svg';
import arrowleftIcon from './images/arrowleft-icon.svg';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><img src={profilePic} alt='profile-pic.png' className='profile-pic'></img></li>
        <li><img src={homeIcon} alt='home icon'></img></li>
        <li><img src={peopleIcon} alt='people icon'></img></li>
        <li><img src={taskIcon} alt='task icon'></img></li>
        <li><img src={shareIcon} alt='share icon'></img></li>
        <li><img src={fileIcon} alt='file icon'></img></li>
        <li><img src={recordIcon} alt='record icon'></img></li>
        <li><img src={heartIcon} alt='heart icon'></img></li>
        <li><img src={arrowleftIcon} alt='arrow left icon'></img></li>
      </ul>
    </div>
  );
}

export default Navbar;
