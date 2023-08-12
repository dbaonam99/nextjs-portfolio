import React from 'react';

import { SectionTitle } from '../styles';

import { Container, MySkills } from './styles';

function Skills() {
  return (
    <Container>
      <SectionTitle>
        <p>My skills</p>
      </SectionTitle>

      <MySkills>
        <div className="about-skill-item flex-center flex-col">
          <div className="about-skill-title">progaming languages</div>
          <ul className="about-skill-item-list flex-center flex-col">
            <li>
              <p>JavaScript</p>
            </li>
            <li>
              <p>HTML, CSS</p>
            </li>
            <li>
              <p>C++</p>
            </li>
            <li>
              <p>Java (based)</p>
            </li>
            <li>
              <p>C# (based)</p>
            </li>
          </ul>
        </div>
        <div className="about-skill-item flex-center flex-col">
          <div className="about-skill-title">frameworks & platforms</div>
          <ul className="about-skill-item-list flex-center flex-col">
            <li>
              <p>ReactJs</p>
            </li>
            <li>
              <p>NodeJS</p>
            </li>
            <li>
              <p>RestfulAPI</p>
            </li>
          </ul>
          <div className="about-skill-title">version control</div>
          <ul className="about-skill-item-list flex-center flex-col">
            <li>
              <p>Git (Github)</p>
            </li>
          </ul>
        </div>
        <div className="about-skill-item flex-center flex-col">
          <div className="about-skill-title">database</div>
          <ul className="about-skill-item-list flex-center flex-col">
            <li>
              <p>MySQL</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
          </ul>
          <div className="about-skill-title">foreign language</div>
          <ul className="about-skill-item-list flex-center flex-col">
            <li>
              <p>TOEIC: 575/990</p>
            </li>
          </ul>
        </div>
      </MySkills>
    </Container>
  );
}

export default Skills;
