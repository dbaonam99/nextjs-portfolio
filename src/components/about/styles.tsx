import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  transition: 1s ease-in-out;
  transition-delay: 0.2s;
  height: 100%;
  position: relative;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;

  p {
    position: relative;
    font-size: 30px;
    width: max-content;
    color: #ccc;
    text-transform: uppercase;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 50px;
      height: 3px;
      background-color: #4bffa5;
      border-bottom-right-radius: 20px;
      border-top-left-radius: 20px;
    }
  }
`;
