import React from 'react';

import { Avatar, Container, Detail, Download } from './styles';

function Introduction() {
  return (
    <Container>
      <Avatar>
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
      </Avatar>

      <Detail>
        <div className="introduce">
          Greetings! I am <strong>Duong Bao Nam</strong>, a full-stack software
          engineer well-versed in React and NodeJS. I thrive on learning and
          adapting to new tech trends, while my experience and teamwork make me
          a reliable asset.
          <br />
          <br />
          <strong>Highest achievement:</strong> I built a customized Minecraft
          server with almost ~1500 concurrent users when I was in high school.
          This showcased my technical skills and problem-solving under pressure.
        </div>

        <div className="info-list">
          <div className="info-item">
            <div className="key">Age:</div>
            <div>{new Date().getFullYear() - 1999}</div>
          </div>
          <div className="info-item">
            <div className="key">Nationality:</div>
            <div>Viet Nam</div>
          </div>
          <div className="info-item">
            <div className="key">Freelance:</div>
            <div>Available</div>
          </div>
          <div className="info-item">
            <div className="key">Address:</div>
            <div>Ho Chi Minh City</div>
          </div>
          <div className="info-item">
            <div className="key">Phone:</div>
            <div>
              <a href="tel: +84948147259">+84948147259</a>
            </div>
          </div>
          <div className="info-item">
            <div className="key">Email:</div>
            <div>
              <a href="mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a>
            </div>
          </div>
        </div>

        <Download>
          <p>Download CV</p>
        </Download>
      </Detail>
    </Container>
  );
}

export default Introduction;
