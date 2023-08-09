import { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { styled } from 'styled-components';

import { LoadingContext } from '@/contexts/LoadingContext';
import LoadingChildOut from '@/components/common/LoadingChildOut';
import Cursor from '@/components/common/Cursor';
import RouteLoading from '@/components/common/RouteLoading';
import ExpandCircle from '@/components/common/ExpandCircle';

const Header = dynamic(() => import('@/components/common/Header'), {
  ssr: false,
});
const IntroLoading = dynamic(() => import('@/components/common/IntroLoading'), {
  ssr: false,
});

const Container = styled.div`
  position: relative;
  background-color: #101010;
  width: 100%;
  height: 100%;
`;

function Layout({ children }: { children: React.ReactNode }) {
  const { introLoading, tabChange } = useContext(LoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  }, [introLoading]);

  return (
    <Cursor>
      <ExpandCircle />
      <IntroLoading />
      {!introLoading && (
        <Container>
          <Header />

          {tabChange && <LoadingChildOut />}

          <RouteLoading />

          {children}
        </Container>
      )}
    </Cursor>
  );
}

export default Layout;
