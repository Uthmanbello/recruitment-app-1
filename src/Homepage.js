import React from 'react';
import './styles/Homepage.css';
import tag from './images/tag.svg';
import disqualified from './images/disqualified.svg';
import qualified from './images/qualified.svg';
import reachout from './images/reachout.svg';
import mail from './images/mail.svg';
import blueArrowdown from './images/blue-arrowdown.svg';
import whiteArrowdown from './images/white-arrowdown.svg';
import fileIcon2 from './images/file-icon2.svg';
import searchIcon from './images/search-icon.svg';

export function Homepage() {
  return (
    <>
      <div className="homepage row align-center">
        <div className='column'>
          <p className='blue heading'>London Internship Program</p>
          <p className='medium-text heading-below'>London</p>
        </div>

        <div className="dropdown">
          <button className="dropbtn blue space-between">Opportunity Browsing <img src={blueArrowdown} alt='arrow down'></img></button>
          <div className="dropdown-content">
            <a href="#" className='row space-between'>
              <div className='row space-between'>
                <p>Applied</p>
                <p className='category-number'>1745</p>
              </div>
            </a>
            <a href="#" className='row space-between'>
              <div className='row space-between'>
                <p>Shortlisted</p>
                <p className='category-number'>453</p>
              </div>
            </a>
          </div>
        </div>

        <div className='heading-icons'>
          <img src={tag} alt='tag icon'></img>
          <img src={disqualified} alt='disqualified icon'></img>
          <img src={qualified} alt='qualified icon'></img>
          <img src={reachout} alt='reachout icon'></img>
          <img src={mail} alt='mail icon'></img>
        </div>

        <button className="videobtn space-between">Move To Video Interview I<img src={whiteArrowdown} alt='arrow down'></img></button> 
      </div>

      <div>
        <div className='search'>
        <img src={searchIcon} alt='search-icon'></img><input type='text' placeholder='Search by name, edu, exp, or #tag' className='search-input'></input>
          <ul>
            <li className='row space-between'>
              <p>Filters</p>
              <p>0 Selected</p>
            </li>
            <li className='row space-between'>
              <p><img src={fileIcon2} alt='file icon'></img>&nbsp;&nbsp;Personal Information</p>
              <img src={blueArrowdown} alt='arrow down'></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Homepage;
