import { styled } from 'styled-components';

import { colors } from '@/constants/theme';

export const Container = styled.div`
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
`;

export const IntroText = styled.div`
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

  strong {
    color: ${colors.primary};
  }

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
`;

export const IntroInfo = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  padding: 0 50px;
  padding-bottom: 40px;

  .contact {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: flex-end;
    width: max-content;
    font-weight: 300;
    color: #bbb;

    @media only screen and (max-width: 1100px) {
      display: none !important;
    }
  }

  .contact p {
    margin: 5px 0;
  }

  @media (max-width: 650px) {
    padding-left: 30px;
    padding-bottom: 30px;
  }

  @media screen and (max-device-width: 1199px) and (min-device-width: 319px) and (max-device-height: 500px) and (orientation: landscape) {
    display: none !important;
  }
`;

export const IntroWriter = styled.div`
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
    line-height: 60px;

    strong {
      color: #4bffa5;
    }

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
      line-height: 48px;
    }
    @media only screen and (max-width: 1200px) {
      font-size: 50px;
      margin-bottom: -3px;
      line-height: 38px;
    }
    @media only screen and (max-width: 750px) {
      font-size: 40px;
      line-height: 32px;
    }
    @media (max-width: 550px) {
      font-size: 30px;
      font-weight: bold;
      line-height: 24px;
    }
    @media (max-width: 450px) {
      font-size: 26px;
    }
    @media (max-width: 350px) {
      font-size: 6vw;
    }
  }

  @media only screen and (max-width: 1100px) {
    padding-left: 0;
  }
`;

export const Avatar = styled.div`
  position: relative;
  -webkit-clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);
  clip-path: polygon(31% 0, 100% 25%, 61% 100%, 0 93%);
  top: -2vh;
  left: 3.5vw;
  width: 56vw;
  height: 80vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 1199px) {
    top: 50px;
    left: 50px;
    width: 640px;
    height: 560px;
  }

  @media (max-width: 950px) {
    left: 0px;
  }

  @media (max-width: 900px) {
    left: -50px;
  }

  @media (max-width: 800px) {
    left: -100px;
  }

  @media (max-width: 700px) {
    width: 120%;
    height: 62vh;
    left: 0;
    top: 0;
    -webkit-clip-path: polygon(25% 0, 100% 25%, 80% 100%, 0 85%);
    clip-path: polygon(25% 0, 100% 25%, 80% 100%, 0 85%);
  }

  @media screen and (max-device-width: 1199px) and (min-device-width: 319px) and (max-device-height: 500px) and (orientation: landscape) {
    width: 70%;
    height: 70vh;
    top: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
