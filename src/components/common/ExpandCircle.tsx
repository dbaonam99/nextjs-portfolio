import { useContext, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

import { ExpandCircleContext } from '@/contexts/ExpandCircleContext';

const SIZE = 3000;

const Container = styled.div`
  position: fixed;
  width: ${SIZE}px;
  height: ${SIZE}px;
  z-index: 999999999;
  display: none;
  border-radius: 50%;
  pointer-events: none;
  animation-name: expand;
  animation-duration: 1.5s;
  transition: 0.3s;

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

    expandRef.current.style.opacity = '1';
    expandRef.current.style.backgroundColor = color;
    expandRef.current.style.display = 'block';
    expandRef.current.style.top = `${top - SIZE / 2}px`;
    expandRef.current.style.left = `${left - SIZE / 2}px`;

    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 500);

    setTimeout(() => {
      expandRef.current.style.opacity = '0';
    }, 700);

    setTimeout(() => {
      expandRef.current.style.display = 'none';
    }, 1000);
  }, [expandCircleAttributes]);

  return <Container ref={expandRef} />;
}

export default ExpandCircle;
