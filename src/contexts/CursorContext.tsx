/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from 'react';

type CursorType = {
  isHover: boolean;
  updateHoverState: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
};

export const CursorContext = React.createContext<CursorType>({
  isHover: false,
  updateHoverState(
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>,
  ): void {
    throw new Error('Function not implemented.');
  },
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [isHover, setIsHover] = useState(false);

  const updateHoverState: React.MouseEventHandler<
    HTMLAnchorElement | HTMLDivElement
  > = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>,
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
