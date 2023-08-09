import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import Layout from '@/layouts';
import BackgroundLine from '@/components/common/BackgroundLine';

function About() {
  return (
    <Layout>
      <div className="About">
        <BackgroundLine />
        <div className="about-container">
          <div className="page-header flex-center">
            <div className="page-title">About me</div>
            <div className="page-center-line" />
            <div className="page-end-line flex">
              <div className="line" />
            </div>
          </div>
          <div className="about-introduce flex">
            <div className="about-avt flex-center">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
            <div className="about-introduce-text flex-col">
              <div className="about-introduce-title">
                Greetings! I am <strong>Duong Bao Nam</strong>, a full-stack
                software engineer well-versed in React and NodeJS. I thrive on
                learning and adapting to new tech trends, while my experience
                and teamwork make me a reliable asset.
                <br />
                <br />
                <strong>Highest achievement:</strong> I built a customized
                Minecraft server with almost ~1500 concurrent users when I was
                in high school. This showcased my technical skills and
                problem-solving under pressure.
              </div>
              <div className="flex" style={{ flexWrap: 'wrap' }}>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Age:</div>
                  <div className="about-introduce-right">
                    {new Date().getFullYear() - 1999}
                  </div>
                </div>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Nationality:</div>
                  <div className="about-introduce-right">Viet Nam</div>
                </div>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Freelance:</div>
                  <div className="about-introduce-right">Available</div>
                </div>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Address:</div>
                  <div className="about-introduce-right">Ho Chi Minh City</div>
                </div>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Phone:</div>
                  <div className="about-introduce-right">
                    <a href="tel: +84948147259">+84948147259</a>
                  </div>
                </div>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Email:</div>
                  <div className="about-introduce-right">
                    <a href="mailto: dbaonam99@gmail.com">
                      dbaonam99@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-introduce-cv flex-center">
                <button>Download CV</button>
              </div>
            </div>
          </div>
          <div className="about-skill">
            <div className="small-title flex-center">
              <p>My skills</p>
            </div>
            <div className="about-skill-list flex">
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
            </div>
          </div>
          <div className="about-skill">
            <div className="small-title flex-center">
              <p>experience & education</p>
            </div>
            <div
              className="education flex-col"
              style={{ marginBottom: '100px' }}
            >
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
        </div>
      </div>
    </Layout>
  );
}
export default About;
