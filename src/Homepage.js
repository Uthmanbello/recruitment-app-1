import React from 'react';
import './styles/Homepage.css';
import tag from './images/tag.svg';
import disqualified from './images/disqualified.svg';
import qualified from './images/qualified.svg';
import reachout from './images/reachout.svg';
import mail from './images/mail.svg';
import blueArrowdown from './images/blue-arrowdown.svg';

export function Homepage() {
  return (
    <div className="homepage row space-between align-center">
      <div className='column'>
        <p className='blue heading'>London Internship Program</p>
        <p className='medium-text heading-below'>London</p>
      </div>

      <div className="dropdown">
        <button className="dropbtn blue space-between">Opportunity Browsing <img src={blueArrowdown} alt='arrow down'></img></button>
        <div className="dropdown-content">
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

      <button className="videobtn">Move To Video Interview I</button> 
    </div>
  );
}

export default Homepage;
