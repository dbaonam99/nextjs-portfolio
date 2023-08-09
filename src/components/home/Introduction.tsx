import { styled } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { useMemo } from 'react';

import Avatar from './Avatar';

const Container = styled.div`
  color: #fff;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;

  @media (max-width: 1199px) {
    padding-bottom: 200px;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media screen and (max-device-width: 1199px) and (min-device-width: 319px) and (max-device-height: 500px) and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
  }

  .home-hello {
    display: flex;
    align-items: center;
    width: 35vw;
    text-align: left;
    font-weight: 300;
    padding-top: 180px;
    margin-left: -70px;
    line-height: 25px;
    max-width: 560px;
    font-size: 20px;
    font-weight: 300;

    @media (max-width: 1199px) {
      height: 100%;
      padding-top: 50%;
      margin-left: -80px;
    }

    @media (max-width: 950px) {
      margin-left: -120px;
    }
    @media (max-width: 900px) {
      width: 350px;
      padding-top: 55%;
      margin-left: -200px;
    }

    @media (max-width: 800px) {
      font-size: 18px;
      width: 300px;
      height: max-content;
      padding-top: 70%;
      margin-left: -260px;
    }

    @media (max-width: 700px) {
      position: absolute;
      top: 67vh;
      left: 0;
      margin: 0;
      padding: 0 50px;
      width: 100%;
      max-width: 100%;
    }

    @media (max-width: 650px) {
      padding-left: 30px;
      padding-right: 50px;
      top: 80vh;
    }

    @media (max-width: 550px) {
      top: 67vh;
    }

    @media screen and (max-device-width: 1199px) and (min-device-width: 319px) and (max-device-height: 500px) and (orientation: landscape) {
      position: relative;
      width: 100%;
      top: -10px;
      height: 20vh;
      padding: 0 50px;
      margin: 0;
    }
  }

  .home-hello strong {
    color: #4bffa5;
  }
`;

const IntroWriter = styled.div`
  flex-grow: 1;
  height: max-content;
  display: inline-block;
  padding-left: 10%;
  display: flex;

  .typing-text {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 100px;
    margin-bottom: -17px;
    line-height: 74px;

    @media only screen and (max-width: 2200px) {
      font-size: 90px;
      margin-bottom: -15px;
    }
    @media only screen and (max-width: 1500px) {
      font-size: 80px;
      margin-bottom: -14px;
    }
    @media only screen and (max-width: 1400px) {
      font-size: 70px;
      margin-bottom: -12px;
    }
    @media only screen and (max-width: 1300px) {
      font-size: 60px;
      margin-bottom: -5px;
    }
    @media only screen and (max-width: 1200px) {
      font-size: 50px;
      margin-bottom: -3px;
    }
    @media only screen and (max-width: 750px) {
      font-size: 40px;
    }
    @media (max-width: 550px) {
      font-size: 30px;
      font-weight: bold;
    }
    @media (max-width: 450px) {
      font-size: 26px;
    }
    @media (max-width: 350px) {
      font-size: 24px;
    }
  }

  .typing-text strong {
    color: #4bffa5;
  }

  @media only screen and (max-width: 1100px) {
    padding-left: 0;
  }
`;

function Introduction() {
  const renderTypeWriter = useMemo(
    () => (
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .pauseFor(2000)
            .changeDeleteSpeed(30)
            .changeDelay(30)

            .typeString("I'm <strong>front-end</strong> developer")
            .pauseFor(500)
            .deleteAll()

            .typeString('I code cool <strong>websites</strong>')
            .pauseFor(500)
            .deleteAll()

            .typeString('I love <strong>javascript</strong>')
            .pauseFor(500)
            .deleteAll()

            .typeString('I live in <strong>HCM City</strong>')
            .pauseFor(500)
            .deleteAll()

            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: '',
          wrapperClassName: 'typing-text',
        }}
      />
    ),
    [],
  );

  return (
    <Container>
      <Avatar />
      <div className="home-hello">
        <p>
          Hello, I’m <strong>Nam</strong>, a Middle Frontend Developer at Tiki.
        </p>
      </div>
      <div className="home-intro flex">
        <div className="home-contact flex-col">
          <span>
            Email: <a href="mailto: dbaonam99@gmail.com">dbaonam99@gmail.com</a>
          </span>
          <span>
            Phone: <a href="tel: +84948147259">0948147259</a>
          </span>
        </div>
        <IntroWriter>{renderTypeWriter}</IntroWriter>
      </div>
    </Container>
  );
}

export default Introduction;
