import React from 'react';
import Div100vh from 'react-div-100vh';
import Typist from 'react-typist';

import BackgroundLine from '@/components/BackgroundLine';
import Layout from '@/layouts';
import Socials from '@/components/Socials';

function Home() {
  return (
    <Layout>
      <Div100vh className="Home">
        <Socials />
        <BackgroundLine />
        <div className="home-container flex">
          <div
            className="home-avt"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
            }}
          />
          <div className="home-hello flex">
            <p>
              Hello, I’m <strong>Duong Bao Nam</strong>, a third year student at
              the University of Information Technology.
            </p>
          </div>
          <div className="home-intro flex">
            <div className="home-contact flex-col">
              <span>
                Email:{' '}
                <a href="mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a>
              </span>
              <p>Phone: 0948147259</p>
            </div>
            <span className="home-writer flex-center">
              <Typist avgTypingDelay={40}>
                <Typist.Delay ms={2000} />
                <p className="react-typewriter-text">
                  I am <strong>front-end</strong> developer
                </p>
                <Typist.Delay ms={500} />
                <Typist.Backspace count={24} delay={500} />
                <p className="react-typewriter-text">
                  I code cool <strong>websites</strong>
                </p>
                <Typist.Delay ms={500} />
                <Typist.Backspace count={21} delay={500} />
                <p className="react-typewriter-text">
                  I love <strong>javascript</strong>
                </p>
                <Typist.Delay ms={500} />
                <Typist.Backspace count={18} delay={500} />
                <p className="react-typewriter-text">
                  I live in <strong>HCM City</strong>
                </p>
                <Typist.Delay ms={500} />
              </Typist>
            </span>
          </div>
        </div>
      </Div100vh>
    </Layout>
  );
}
export default Home;
