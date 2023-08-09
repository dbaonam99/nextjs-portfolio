import { useContext, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

import { ExpandCircleContext } from '@/contexts/ExpandCircleContext';

const Container = styled.div`
  width: 3000px;
  height: 3000px;
  display: none;
  border-radius: 50%;
  position: absolute;
  z-index: 99999999;

  //   transform: translate(-50%, -50%);
  pointer-events: none;
  animation-name: expand;
  animation-duration: 1s;

  @keyframes expand {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .icon {
    pointer-events: none;
  }
`;

function ExpandCircle() {
  const expandRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { expandCircleAttributes } = useContext(ExpandCircleContext);

  useEffect(() => {
    const { color, position = [] } = expandCircleAttributes;

    if (position?.length < 2 || expandRef.current.style.display === 'block')
      return;

    const [top, left] = position;

    expandRef.current.style.display = 'block';
    expandRef.current.style.opacity = '1';
    expandRef.current.style.backgroundColor = color;
    expandRef.current.style.top = top;
    expandRef.current.style.left = left;

    // setTimeout(() => {
    //   expandRef.current.style.opacity = '0';
    // }, 1000);

    setTimeout(() => {
      expandRef.current.style.display = 'none';
    }, 800);
  }, [expandCircleAttributes]);

  return <Container ref={expandRef} />;
}

export default ExpandCircle;
