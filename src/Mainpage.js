import React, { useState } from 'react';
import './styles/Mainpage.css';
import tag from './images/tag.svg';
import disqualified from './images/disqualified.svg';
import qualified from './images/qualified.svg';
import reachout from './images/reachout.svg';
import mail from './images/mail.svg';
import blueArrowdown from './images/blue-arrowdown.svg';
import whiteArrowdown from './images/white-arrowdown.svg';
import fileIcon2 from './images/file-icon2.svg';
import searchIcon from './images/search-icon.svg';
import as from './images/as.svg';
import warningIcon from './images/warning-icon.svg';

const dropdownItems = [
  { label: 'Applied', number: 1745 },
  { label: 'Shortlisted', number: 453 },
  { label: 'Technical Interview', number: 123 },
  { label: 'Opportunity Browsing', number: 243 },
  { label: 'Video Interview I', number: 25 },
  { label: 'Video Interview II', number: 25 },
  { label: 'Video Interview III', number: 25 },
  { label: 'Offer', number: 25 },
  { label: 'Withdrawn', number: 25 },
];

const detailsItems = [
  { candidate: 'Aaliyah Sanderson', city: 'Riyadh, Saudi Arabia', school: 'Bachelor - Cambridge University' },
  { candidate: 'John Doe', city: 'Boston, USA', school: 'Bachelor - MIT' },
  { candidate: 'Thomas Matt', city: 'Edinburgh, UK', school: 'Bachelor - Havard University' },
  { candidate: 'Kamilia Smith', city: 'London, UK', school: 'Bachelor - Boston University' },
  { candidate: 'Roy Jade', city: 'Cambridge, UK', school: 'Bachelor - Yale' },
  { candidate: 'Ahmed Salman', city: 'New York, USA', school: 'Bachelor - Cambridge University' },
];

export function Mainpage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (item) => {
    setSelectedOption(item.label);
  };

  return (
    <>
      <div className="homepage row align-center">
        <div className="column">
          <p className="blue heading">London Internship Program</p>
          <p className="medium-text heading-below">London</p>
        </div>

        <div className="dropdown">
          <button type='text' className="dropbtn blue space-between">
            {selectedOption || 'Applied'}
            {' '}
            {' '}
            <img src={blueArrowdown} alt="arrow down" />
          </button>
          <div className="dropdown-content">
            {dropdownItems.map((item, index) => (
              <a href="#" className="row space-between" key={index} onClick={() => handleOptionClick(item)}>
                <div className="row space-between">
                  <p>{item.label}</p>
                  <p className="category-number">{item.number}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="heading-icons">
          <img src={tag} alt="tag icon" />
          <img src={disqualified} alt="disqualified icon" />
          <img src={qualified} alt="qualified icon" />
          <img src={reachout} alt="reachout icon" />
          <img src={mail} alt="mail icon" />
        </div>

        <button type='button' className="videobtn space-between">
          Move To Video Interview I
          <img src={whiteArrowdown} alt="arrow down" />
        </button>
      </div>

      <div className="row">
        <div className="search">
          <div className="row search-div">
            <img src={searchIcon} alt="search icon" />
            <input type="text" placeholder="Search by name, edu, exp, or #tag" className="search-input" />
            <img src={warningIcon} alt="warning icon" />
          </div>
          <ul>
            <li className="row space-between">
              <p>Filters</p>
              <p>0 Selected</p>
            </li>
            <li className="row space-between">
              <p>
                <img src={fileIcon2} alt="file icon" />
&nbsp;&nbsp;Personal Information
              </p>
              <img src={blueArrowdown} alt="arrow down" />
            </li>
            <li className="row space-between">
              <p>
                <img src={fileIcon2} alt="file icon" />
&nbsp;&nbsp;Education
              </p>
              <img src={blueArrowdown} alt="arrow down" />
            </li>
            <li className="row space-between">
              <p>
                <img src={fileIcon2} alt="file icon" />
&nbsp;&nbsp;Work Experience
              </p>
              <img src={blueArrowdown} alt="arrow down" />
            </li>
            <li className="row space-between">
              <p>
                <img src={fileIcon2} alt="file icon" />
&nbsp;&nbsp;Activity Filter
              </p>
              <img src={blueArrowdown} alt="arrow down" />
            </li>
            <li className="row space-between">
              <p>
                <img src={fileIcon2} alt="file icon" />
&nbsp;&nbsp;Advanced Filter
              </p>
              <img src={blueArrowdown} alt="arrow down" />
            </li>
          </ul>
        </div>

        <div>
          <ul className="details-container">
            <li className="row details-heading">
              <button type="radio" className="check" />
              <p className="blue candidates-num">247 Candidates</p>
              <div className="row q-d-info">
                <p className="blue medium-text">Qualified</p>
                <span className="line" />
                <p className="medium-text align-center">
                  Task &nbsp;
                  <span className="value">25</span>
                </p>
                <span className="line" />
                <p className="medium-text">
                  Disqualified &nbsp;
                  <span className="value">78</span>
                </p>
              </div>
            </li>

            {detailsItems.map((item, index) => (
              <li key={index} className="row candidate-details">
                <button type="checkbox" className="check" />
                <img src={as} alt="initials" />
                <div className="details">
                  <p className="name">{item.candidate}</p>
                  <p className="city">{item.city}</p>
                  <p className="qualification">
                    {item.school}
                    {' '}
                    (2023 - 2023)
                  </p>
                  <p className="top-candidate">#top_candidate&nbsp;&nbsp;&nbsp;#top_candidate</p>
                  <div className="classification row">
                    <div>New York</div>
                    <div>Marketing</div>
                    <div>London</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
