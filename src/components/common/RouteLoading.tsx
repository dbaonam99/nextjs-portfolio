import { useContext, useEffect, useState } from 'react';

import { LoadingContext } from '@/contexts/LoadingContext';

function RouteLoading() {
  const { loadingChild, updateLoadingChild } = useContext(LoadingContext);

  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 400);
    setTimeout(() => {
      setAnimation2(true);
    }, 800);
    setTimeout(() => {
      setAnimation3(true);
    }, 1200);
    setTimeout(() => {
      updateLoadingChild(false);
      document.body.style.overflow = 'unset';
    }, 2000);
  }, [animation, animation2, animation3]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  }, []);

  return (
    <div
      className={
        loadingChild ? 'loading-child loading-child-show' : 'loading-child'
      }
    >
      <div className="loading-line flex">
        <div className="loading-scroll-line" />
        <div
          className={
            animation3
              ? 'loading-line-item loading-line-item-height'
              : 'loading-line-item'
          }
        />
        <div
          className={
            animation2
              ? 'loading-line-item loading-line-item-height'
              : 'loading-line-item'
          }
          style={{
            marginTop: `${height}}px`,
          }}
        />
        <div
          className={
            animation
              ? 'loading-line-item loading-line-item-height'
              : 'loading-line-item'
          }
        />
        <div
          className={
            animation2
              ? 'loading-line-item loading-line-item-height'
              : 'loading-line-item'
          }
          style={{
            marginTop: `${height}}px`,
          }}
        />
        <div
          className={
            animation3
              ? 'loading-line-item loading-line-item-height'
              : 'loading-line-item'
          }
        />
      </div>
    </div>
  );
}

export default RouteLoading;
