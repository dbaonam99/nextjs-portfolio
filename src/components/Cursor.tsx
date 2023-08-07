import React, { useContext, useRef, MutableRefObject } from 'react';
import { styled } from 'styled-components';

import { CursorContext } from '@/contexts/CursorContext';
import { colors } from '@/constants/theme';

const CursorContainer = styled.div`
  .cursor {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    transition:
      width 0.4s ease-in-out,
      height 0.4s ease-in-out,
      background-color 0.5s;

    @media only screen and (max-width: 650px) {
      display: none !important;
    }
  }

  .cursor-hover {
    width: 80px;
    height: 80px;
    background-color: ${colors.cursor_hover} !important;
  }
`;

function Cursor({ children }: { children: React.ReactNode }) {
  const cursor = useRef() as MutableRefObject<HTMLInputElement>;

  const { isHover } = useContext(CursorContext);

  const updateCursor = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    cursor.current.style.backgroundColor = colors.cursor;
    cursor.current.style.top = `${event.pageY}px`;
    cursor.current.style.left = `${event.pageX}px`;
  };

  return (
    <CursorContainer
      onMouseMove={(event) => {
        setTimeout(() => {
          updateCursor(event);
        }, 100);
      }}
      onMouseLeave={(event) => {
        cursor.current.style.opacity = '0';
        updateCursor(event);
      }}
      onMouseEnter={(event) => {
        cursor.current.style.opacity = '1';
        updateCursor(event);
      }}
    >
      <div className={`cursor ${isHover && 'cursor-hover'}`} ref={cursor} />
      {children}
    </CursorContainer>
  );
}

export default Cursor;
