import { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { LoadingContext } from '@/contexts/LoadingContext';
import Cursor from '@/components/common/Cursor';
import RouteLoading from '@/components/common/RouteLoading';
import ExpandCircle from '@/components/common/ExpandCircle';
import BackgroundLine from '@/components/common/BackgroundLine';

import { Container } from './styles';

const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
});
const IntroLoading = dynamic(() => import('@/components/common/IntroLoading'), {
  ssr: false,
});

function Layout({ children }: { children: React.ReactNode }) {
  const { introLoading } = useContext(LoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  }, [introLoading]);

  return (
    <Cursor>
      <BackgroundLine />
      <ExpandCircle />
      <IntroLoading />
      {!introLoading && (
        <Container>
          <Header />

          {/* <LoadingChildOut /> */}

          <RouteLoading />

          {children}
        </Container>
      )}
    </Cursor>
  );
}

export default Layout;
