import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { LoadingContext } from '@/contexts/LoadingContext';
import { colors } from '@/constants/theme';

const Container = styled.div<{ isShow: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: ${({ isShow }) => (isShow ? '999999' : '0')};
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
`;

const ScrollLine = styled.div`
  display: flex;
  height: 70%;
  width: 1px;
  background-color: #ccc;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  animation-name: scroll_line;
  animation-duration: 3.2s;
  animation-delay: 0.2s;
  transform: translateY(-100vh);

  @keyframes scroll_line {
    0% {
      transform: translateY(-100vh);
    }
    40% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;

const Line = styled.div<{ isShow: boolean; direction: string }>`
  width: 20%;
  height: 100%;
  background-color: ${colors.primary};
  transition: 0.5s;

  @media only screen and (max-width: 700px) {
    width: 33.33333333%;
  }

  // &:nth-child(6),
  // &:nth-child(2) {
  //   @media only screen and (max-width: 700px) {
  //     display: none;
  //   }
  // }

  transform: ${({ isShow, direction }) =>
    isShow ? '' : `translateY(${direction === 'up' ? '100vh' : '-100vh'})`};
`;

function RouteLoading() {
  const { loadingChild, updateLoadingChild } = useContext(LoadingContext);

  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 400);
    setTimeout(() => {
      setAnimation2(true);
    }, 900);
    setTimeout(() => {
      setAnimation3(true);
    }, 1300);

    setTimeout(() => {
      updateLoadingChild(false);
      document.body.style.overflow = 'unset';
    }, 2000);
  }, [animation, animation2, animation3, updateLoadingChild]);

  return (
    <Container isShow={loadingChild}>
      <ScrollLine />

      <Line isShow={!animation3} direction="down" />

      <Line isShow={!animation2} direction="up" />

      <Line isShow={!animation} direction="down" />

      <Line isShow={!animation2} direction="up" />

      <Line isShow={!animation3} direction="down" />
    </Container>
  );
}

export default RouteLoading;
