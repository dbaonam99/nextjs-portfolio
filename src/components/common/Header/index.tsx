import { useContext } from 'react';
import { useRouter } from 'next/router';

import { LoadingContext } from '@/contexts/LoadingContext';
import { CursorContext } from '@/contexts/CursorContext';
import { NAVBAR_ITEMS } from '@/constants/constants';

import MobileMenu from '../MobileMenu';

import { Container, NavBarItem, Navbar, Title } from './styles';

function Header({ title }: { title?: string }) {
  const router = useRouter();
  const location = router.pathname.split('/')[1];

  const { updateHoverState } = useContext(CursorContext);
  const { setTabChangeFunc } = useContext(LoadingContext);

  const redirect = (url: string) => {
    setTabChangeFunc(true);
    setTimeout(() => {
      router.push(url);
      setTabChangeFunc(false);
    }, 2000);
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}

      <MobileMenu redirect={redirect} />

      <Navbar>
        <div>
          {NAVBAR_ITEMS.map(({ id, name, route }) => (
            <NavBarItem
              key={id}
              isActive={location === route}
              onMouseEnter={updateHoverState}
              onMouseLeave={updateHoverState}
              onClick={() => {
                redirect(`/${route}`);
              }}
            >
              <p>{name}</p>
              <p>{name}</p>
            </NavBarItem>
          ))}
        </div>
      </Navbar>
    </Container>
  );
}

Header.defaultProps = {
  title: '',
};

export default Header;
