import React from 'react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Experiences() {
  return (
    <div className="about-skill">
      <div className="small-title flex-center">
        <p>experience & education</p>
      </div>
      <div className="education flex-col" style={{ marginBottom: '100px' }}>
        <div className="education-item flex">
          <div className="education-item-left flex-center flex-col">
            <div className="education-icon flex-center">
              <FontAwesomeIcon icon={faGraduationCap} className="icon" />
            </div>
            <div className="education-line flex-center" />
          </div>
          <div className="education-item-right flex-col">
            <div className="education-time">2018 - PRESENT</div>
            <div className="education-text">
              <span className="education-text-title flex">
                <p>ENGINEERING DEGREE </p>
                <p>- UNIVERSITY OF INFORMATION TECHNOLOGY</p>
              </span>
              <div className="education-text-small">
                Learn Information Technology, major in Information System
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
