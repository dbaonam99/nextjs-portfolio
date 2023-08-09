import React from 'react';
import Div100vh from 'react-div-100vh';
import { styled } from 'styled-components';

import BackgroundLine from '@/components/common/BackgroundLine';
import Layout from '@/layouts';
import Socials from '@/components/home/Socials';
import Introduction from '@/components/home/Introduction';

const Container = styled(Div100vh)`
  background-color: #101010;
  width: 100%;
  height: calc(100vh + 1px);
  transition: 1s ease-in-out;
  transition-delay: 0.2s;
  position: absolute;
  top: 0;
  left: 0;
`;

function Home() {
  return (
    <Layout>
      <Container>
        <Socials />

        <BackgroundLine />

        <Introduction />
      </Container>
    </Layout>
  );
}
export default Home;
