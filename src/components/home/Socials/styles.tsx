import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 50px;
  bottom: 40px;
  width: 20px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .text {
    font-weight: 300;
    color: #bbb;
    font-size: 14px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .line {
    margin: 20px 0;
    width: 1px;
    height: 50px;
    background-color: #fff;
  }

  @media only screen and (max-width: 850px) {
    bottom: 34px;
    right: 30px;

    .text,
    .line {
      display: none;
    }
  }

  @media (max-width: 650px) {
    right: 20px;
    bottom: 27px;
  }

  @media screen and (max-device-width: 1199px) and (min-device-width: 319px) and (max-device-height: 500px) and (orientation: landscape) {
    bottom: 34px;
    .text,
    .line {
      display: none;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bbb;
    margin: 15px 0;
    width: 30px;
    height: 30px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: #4bffa5;
    }
  }
`;
