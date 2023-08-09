/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from 'react';

type AttributesType = {
  color: string;
  position: string[];
};

type ExpandCircleType = {
  expandCircleAttributes: AttributesType;
  showExpandCircle: ({ color, position }: AttributesType) => void;
};

export const ExpandCircleContext = React.createContext<ExpandCircleType>({
  expandCircleAttributes: {
    color: '',
    position: ['', ''],
  },
  showExpandCircle: ({ color, position }: AttributesType) => {},
});

export function ExpandCircleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expandCircleAttributes, setAttributes] = useState({
    color: '',
    position: ['', ''],
  });

  const showExpandCircle = (attributes: AttributesType) => {
    setAttributes(attributes);
  };

  const values = useMemo(
    () => ({
      expandCircleAttributes,
      showExpandCircle,
    }),
    [expandCircleAttributes],
  );

  return (
    <ExpandCircleContext.Provider value={values}>
      {children}
    </ExpandCircleContext.Provider>
  );
}
