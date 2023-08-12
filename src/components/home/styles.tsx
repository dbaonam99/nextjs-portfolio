import Div100vh from 'react-div-100vh';
import { styled } from 'styled-components';

export const Container = styled(Div100vh)`
  width: 100%;
  height: calc(100vh + 1px);
  transition: 1s ease-in-out;
  transition-delay: 0.2s;
  position: absolute;
  top: 0;
  left: 0;
`;
