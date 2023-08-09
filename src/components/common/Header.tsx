/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

import { LoadingContext } from '@/contexts/LoadingContext';
import { CursorContext } from '@/contexts/CursorContext';
import { NAVBAR_ITEMS } from '@/constants/constants';
import { colors } from '@/constants/theme';

import MobileMenu from './MobileMenu';

const Container = styled.div`
  position: absolute;
  padding: 50px;
  left: 0;
  top: 0;
  width: 100%;
  background-color: transparent;
  transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  -moz-transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  -webkit-transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  -o-transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  z-index: 99999;

  @media (max-width: 650px) {
    padding: 30px;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1199px) {
    display: none !important;
  }
`;

const NavBarItem = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? colors.white : colors.gray)};
  margin-left: 60px;
  display: inline-block;
  vertical-align: top;
  font-size: 1em;
  line-height: 40px;
  font-weight: 600;
  height: 40px;
  overflow: hidden;
  cursor: pointer;

  p {
    transition: 0.5s;
  }

  &:hover {
    color: #fff;
  }

  &:hover p {
    transform: translateY(-40px);
  }
`;

function Header() {
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
      <MobileMenu redirect={redirect} />

      <Navbar>
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
      </Navbar>
    </Container>
  );
}
export default Header;
