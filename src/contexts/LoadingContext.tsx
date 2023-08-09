/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from 'react';

type LoadingType = {
  tabChange: boolean;
  setTabChangeFunc: (bool: boolean) => void;
  introLoading: boolean;
  updateIntroLoading: (bool: boolean) => void;
  loadingChild: boolean;
  updateLoadingChild: (bool: boolean) => void;
};

export const LoadingContext = React.createContext<LoadingType>({
  tabChange: false,
  setTabChangeFunc: (bool: boolean) => {},
  introLoading: true,
  updateIntroLoading: (bool: boolean) => {},
  loadingChild: true,
  updateLoadingChild: (bool: boolean) => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [introLoading, setIntroLoading] = useState(true);
  const [tabChange, setTabChange] = useState(false);
  const [loadingChild, setLoadingChild] = useState(true);

  const updateIntroLoading = (bool: boolean) => {
    setIntroLoading(bool);
  };
  const setTabChangeFunc = (bool: boolean) => {
    setTabChange(bool);
  };

  const updateLoadingChild = (bool: boolean) => {
    setLoadingChild(bool);
  };

  const values = useMemo(
    () => ({
      tabChange,
      setTabChangeFunc,
      introLoading,
      updateIntroLoading,
      loadingChild,
      updateLoadingChild,
    }),
    [introLoading, loadingChild, tabChange],
  );

  return (
    <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
  );
}
