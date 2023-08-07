import { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { LoadingContext } from '@/contexts/Loading';
import LoadingChildOut from '@/components/LoadingChildOut';
import LoadingChild from '@/components/LoadingChild';
import Cursor from '@/components/Cursor';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const LoadingPage = dynamic(() => import('@/components/LoadingPage'), {
  ssr: false,
});

function Layout({ children }: { children: React.ReactNode }) {
  const { loading, tabChange, setLoadingChild } = useContext(LoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setLoadingChild(false);
      document.body.style.overflow = 'unset';
    }, 2000);
  }, []);

  return (
    <Cursor>
      <LoadingPage />
      {!loading && (
        <div className="App">
          <Header />

          {tabChange && <LoadingChildOut />}

          <LoadingChild />

          {children}
        </div>
      )}
    </Cursor>
  );
}

export default Layout;
