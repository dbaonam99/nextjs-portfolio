import React, { useContext, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import TypeWriterEffect from 'react-typewriter-effect';

import { LoadingContext } from '@/contexts/Loading';

export default function LoadingPage() {
  const { loading, setLoadingFunc } = useContext(LoadingContext);

  useEffect(() => {
    if (window.location.href.split('/')[3] === '') {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setLoadingFunc(false);
        document.body.style.overflow = 'unset';
      }, 3000);
    } else {
      setLoadingFunc(false);
    }
  }, []);

  return (
    <Div100vh
      className={loading ? 'loading-page show-loading' : 'loading-page'}
    >
      <div className="loading-text-box flex-center">
        <div className="loading-page-container">
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'fmain',
              fontWeight: 500,
              fontSize: '32px',
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#000',
              letterSpacing: '10px',
              wordWrap: 'break-word',
            }}
            cursorColor="transparent"
            startDelay={500}
            multiText={['Hello!', "I'm Duong Bao Nam"]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
        </div>
      </div>
    </Div100vh>
  );
}
