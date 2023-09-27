import React from 'react';
import './styles/Homepage.css';
import tag from './images/tag.svg';
import disqualified from './images/disqualified.svg';
import qualified from './images/qualified.svg';
import reachout from './images/reachout.svg';
import mail from './images/mail.svg';

function Homepage() {
  return (
    <div className="homepage">
      <div>
        <p>London Internship Program</p>
        <p>London</p>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Opportunity Browsing</button>
        <div class="dropdown-content">
          <a href="#">
            <p>Applied</p>
            <p>1745</p>
          </a>
        </div>
      </div>

      <div>
        <img src={tag} alt='tag icon'></img>
        <img src={disqualified} alt='disqualified icon'></img>
        <img src={qualified} alt='qualified icon'></img>
        <img src={reachout} alt='reachout icon'></img>
        <img src={mail} alt='mail icon'></img>
      </div>

      <button class="videobtn">Move To Video Interview I</button> 
    </div>
  );
}

export default Homepage;
