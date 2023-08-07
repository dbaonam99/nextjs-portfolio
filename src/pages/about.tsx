import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

import BackgroundLine from '@/components/BackgroundLine';
import Layout from '@/layouts';

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
              <Image
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/138472045_871082040127340_7595270232215518102_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=DBtueculOlMAX_7o2aB&_nc_ht=scontent.fsgn2-3.fna&oh=8326102d792c5c574946a692d4fa8c5e&oe=60267FC4"
                alt=""
              />
            </div>
            <div className="about-introduce-text flex-col">
              <div className="about-introduce-title">
                Hello! My name is <strong>Duong Bao Nam</strong>. I am a third
                year student at the University of Information Technology (UIT).
                I have the desire to become a back-end & front‑end developer, I
                am passionate about building excellent website that improves the
                lives of those around me.
              </div>
              <div className="flex" style={{ flexWrap: 'wrap' }}>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Age:</div>
                  <div className="about-introduce-right">21</div>
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
                  <div className="about-introduce-right">
                    Thu Duc district, Ho Chi Minh City
                  </div>
                </div>
                <div className="about-introduce-item flex">
                  <div className="about-introduce-left">Phone:</div>
                  <div className="about-introduce-right">0948147259</div>
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
