import React from 'react';

import Socials from '@/components/home/Socials';
import Introduction from '@/components/home/Introduction';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Socials />
      <Introduction />
    </Container>
  );
}

export default Home;
