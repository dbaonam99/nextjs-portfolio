/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from 'react';

type CursorType = {
  isHover: boolean;
  updateHoverState: React.MouseEventHandler<HTMLAnchorElement>;
};

export const CursorContext = React.createContext<CursorType>({
  isHover: false,
  updateHoverState(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void {
    throw new Error('Function not implemented.');
  },
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [isHover, setIsHover] = useState(false);

  const updateHoverState: React.MouseEventHandler<HTMLAnchorElement> = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (event.type === 'mouseenter') {
      setIsHover(true);
    } else if (event.type === 'mouseleave') {
      setIsHover(false);
    }
  };

  const values = useMemo(() => ({ isHover, updateHoverState }), [isHover]);

  return (
    <CursorContext.Provider value={values}>{children}</CursorContext.Provider>
  );
}
