import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import { CursorContext } from '@/contexts/CursorContext';
import { NAVBAR_ITEMS } from '@/constants/constants';
import { ExpandCircleContext } from '@/contexts/ExpandCircleContext';
import { colors } from '@/constants/theme';

import { Container, Hamburger } from './styles';

function MobileMenu({ redirect }: { redirect: (url: string) => void }) {
  const router = useRouter();
  const location = router.pathname.split('/')[1];

  const { updateHoverState } = useContext(CursorContext);
  const { showExpandCircle } = useContext(ExpandCircleContext);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const onMobileMenuClick = (event: { pageY: number; pageX: number }) => {
    showExpandCircle({
      color: colors.base,
      position: [event.pageY, event.pageX],
    });
    setTimeout(() => {
      setOpenMobileMenu(true);
    }, 300);
  };

  return (
    <>
      <Hamburger
        onClick={onMobileMenuClick}
        onMouseEnter={updateHoverState}
        onMouseLeave={updateHoverState}
      >
        <FontAwesomeIcon icon={faBars} className="icon" />
      </Hamburger>

      <Container isShow={openMobileMenu}>
        <div
          className={
            openMobileMenu
              ? 'menu-mobile-box menu-mobile-box-open'
              : 'menu-mobile-box'
          }
        >
          <Hamburger
            onClick={(event) => {
              showExpandCircle({
                color: colors.primary,
                position: [event.pageY, event.pageX],
              });
              setTimeout(() => {
                setOpenMobileMenu(false);
              }, 500);
            }}
            onMouseEnter={updateHoverState}
            onMouseLeave={updateHoverState}
          >
            <FontAwesomeIcon icon={faTimes} className="icon" />
          </Hamburger>

          <div className="menu-mobile-item-box flex">
            <div className="menu-mobile-item-list flex-center flex-col">
              {NAVBAR_ITEMS.map(({ id, name, route }) => (
                <div
                  key={id}
                  className={
                    location === route
                      ? 'menu-mobile-item-item menu-mobile-item-item-active'
                      : 'menu-mobile-item-item'
                  }
                  onMouseEnter={updateHoverState}
                  onMouseLeave={updateHoverState}
                  onClick={() => {
                    setTimeout(() => {
                      setOpenMobileMenu(false);
                    }, 2000);
                    redirect(`/${route}`);
                  }}
                  aria-hidden="true"
                >
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default MobileMenu;
