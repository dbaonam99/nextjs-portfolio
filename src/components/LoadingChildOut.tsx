import { useContext, useEffect, useState } from 'react';

import { CursorContext } from '@/contexts/CursorContext';

export default function LoadingChildOut(props) {
  const { updateHoverState } = useContext(CursorContext);

  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);

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
  }, [animation, animation2, animation3]);

  return (
    <div
      className="loading-child loading-child-show"
      onMouseMove={() => {
        updateHoverState(false);
      }}
    >
      <div className="loading-line flex">
        <div
          className={
            animation3
              ? 'loading-line-item-out loading-line-item-out-height'
              : 'loading-line-item-out'
          }
          style={{
            marginTop: `${window.innerHeight}px`,
          }}
        />
        <div
          className={
            animation2
              ? 'loading-line-item-out loading-line-item-out-height'
              : 'loading-line-item-out'
          }
        />
        <div
          className={
            animation
              ? 'loading-line-item-out loading-line-item-out-height'
              : 'loading-line-item-out'
          }
          style={{
            marginTop: `${window.innerHeight}px`,
          }}
        />
        <div
          className={
            animation2
              ? 'loading-line-item-out loading-line-item-out-height'
              : 'loading-line-item-out'
          }
        />
        <div
          className={
            animation3
              ? 'loading-line-item-out loading-line-item-out-height'
              : 'loading-line-item-out'
          }
          style={{
            marginTop: `${window.innerHeight}px`,
          }}
        />
      </div>
    </div>
  );
}
