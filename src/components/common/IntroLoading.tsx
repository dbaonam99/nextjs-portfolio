import React, { useContext, useState } from 'react';
import Div100vh from 'react-div-100vh';
import Typewriter from 'typewriter-effect';
import { styled } from 'styled-components';

import { LoadingContext } from '@/contexts/LoadingContext';
import { colors } from '@/constants/theme';

const Container = styled(Div100vh)<{ isShow: boolean; disabled: boolean }>`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  transition: 0.7s ease-in-out;
  z-index: 9999999999;
  transform: ${({ isShow }) => (isShow ? 'scale(1)' : 'scale(2) ')};
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
  background-color: ${colors.white};
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};

  .typing-text {
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.black};
    letter-spacing: 6px;
    word-spacing: 10px;
    word-wrap: break-word;
    width: 100%;
  }

  .text-wrapper {
    position: absolute;
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    .Typewriter {
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (max-width: 700px) {
    .react-typewriter-text {
      font-size: 28px !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .react-typewriter-text {
      font-size: 26px !important;
    }
  }
  @media only screen and (max-width: 550px) {
    .react-typewriter-text {
      font-size: 24px !important;
      letter-spacing: 5px !important;
    }
  }
  @media only screen and (max-width: 450px) {
    .react-typewriter-text {
      font-size: 22px !important;
    }
    .text-wrapper {
      padding: 0 20px;
    }
  }
  @media only screen and (max-width: 370px) {
    .react-typewriter-text {
      font-size: 6vw !important;
    }
  }
`;

function IntroLoading() {
  const { introLoading, updateIntroLoading } = useContext(LoadingContext);
  const [disabled, setDisabled] = useState(false);

  const renderTypeWriter = () => (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .callFunction(() => {
            if (window.location.href.split('/')[3] === '') {
              document.body.style.overflow = 'hidden';
            }
          })
          .changeDeleteSpeed(10)
          .pauseFor(500)
          .changeDelay(30)
          .typeString('Hello!')
          .pauseFor(1000)
          .deleteAll()
          .typeString(`I'm Duong Bao Nam`)
          .pauseFor(1000)
          .deleteAll()
          .callFunction(() => {
            updateIntroLoading(false);
            document.body.style.overflow = 'unset';

            setTimeout(() => {
              setDisabled(true);
            }, 1000);
          })
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
        cursor: '',
        wrapperClassName: 'typing-text',
      }}
    />
  );

  return (
    <Container isShow={introLoading} disabled={disabled}>
      <div className="text-wrapper">{renderTypeWriter()}</div>
    </Container>
  );
}

export default IntroLoading;
