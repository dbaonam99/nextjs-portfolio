import Div100vh from 'react-div-100vh';
import { styled } from 'styled-components';

export const Container = styled(Div100vh)<{ isShow: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  visibility: hidden;
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};

  .menu-mobile-box {
    position: absolute;
    background-color: #101010;
    width: 100%;
    height: 100%;
    display: none;
  }

  .menu-mobile-box-open {
    display: block;
  }

  .menu-mobile-item-list {
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .menu-mobile-item-box {
    width: 100%;
    height: 100%;
    padding: 100px;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }

  .menu-mobile-item-item {
    width: max-content;
    margin: 20px 0;
  }
  .menu-mobile-item-item-active p {
    color: #4bffa5 !important;
  }
  .menu-mobile-item-item p {
    color: #ccc;
    font-weight: 500;
    font-size: 28px;
    cursor: pointer;
    transition: 1s;
  }
  .menu-mobile-item-item:hover p {
    color: #4bffa5;
  }
  .menu-mobile-container-open {
    opacity: 1;
    visibility: visible;
  }
`;

export const Hamburger = styled.div`
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 24px;
    color: #fff;
    transition: 0.5s;
  }

  &:hover .icon {
    color: #4bffa5;
    transition: 0.5s;
    transform: rotate(90deg);
  }

  @media (max-width: 1199px) {
    opacity: 1;
    visibility: visible;
  }
`;
