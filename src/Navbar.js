import React from 'react';
import './styles/Navbar.css';
import profilePic from './images/profile-pic.png';
import homeIcon from './images/home-icon.svg';
import peopleIcon from './images/people-icon.svg';
import taskIcon from './images/task-icon.svg';
import shareIcon from './images/share-icon.svg';
import fileIcon from './images/file-icon.svg';
import recordIcon from './images/record-icon.svg';
import heartIcon from './images/heart-icon.svg';
import arrowleftIcon from './images/arrowleft-icon.svg';
import settingsIcon from './images/settings-icon.svg';
import as from './images/as.svg';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><img src={profilePic} alt="profile-pic.png" className="profile-pic" /></li>
        <li><img src={homeIcon} alt="home icon" /></li>
        <li><img src={peopleIcon} alt="people icon" /></li>
        <li><img src={taskIcon} alt="task icon" /></li>
        <li><img src={shareIcon} alt="share icon" /></li>
        <li><img src={fileIcon} alt="file icon" /></li>
        <li><img src={recordIcon} alt="record icon" /></li>
        <li><img src={heartIcon} alt="heart icon" /></li>
        <li><img src={arrowleftIcon} alt="arrow left icon" /></li>
        <li><img src={settingsIcon} alt="settings icon" /></li>
        <li><img src={as} alt="initials icon" /></li>
      </ul>
    </div>
  );
}

export default Navbar;
