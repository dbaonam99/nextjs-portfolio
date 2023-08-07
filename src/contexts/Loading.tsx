import React, { useState } from 'react';

export const LoadingContext = React.createContext();

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [tabChange, setTabChange] = useState(false);
  const [loadingChild, setLoadingChild] = useState(true);

  const setLoadingFunc = (bool: boolean) => {
    setLoading(bool);
  };
  const setTabChangeFunc = (bool: boolean) => {
    setTabChange(bool);
  };

  return (
    <LoadingContext.Provider
      value={{
        tabChange,
        setTabChangeFunc,
        loading,
        setLoadingFunc,
        loadingChild,
        setLoadingChild,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
