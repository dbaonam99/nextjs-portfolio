import { styled } from 'styled-components';

export const Container = styled.div<{ fullScreen: boolean | undefined }>`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: ${({ fullScreen }) => (fullScreen ? '0' : '130px')};
`;
