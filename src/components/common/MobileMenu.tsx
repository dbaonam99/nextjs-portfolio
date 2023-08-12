/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Div100VH from 'react-div-100vh';
import { styled } from 'styled-components';
import { useRouter } from 'next/router';

import { CursorContext } from '@/contexts/CursorContext';
import { NAVBAR_ITEMS } from '@/constants/constants';
import { ExpandCircleContext } from '@/contexts/ExpandCircleContext';
import { colors } from '@/constants/theme';

const Container = styled(Div100VH)<{ isShow: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  visibility: hidden;
  opacity: ${({ isShow }) => (isShow ? '1' : '0')};
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};

  .menu-mobile-box {
    position: absolute;
    background-color: #101010;
    width: 100%;
    height: 100%;
    display: none;
  }

  .menu-mobile-box-open {
    display: block;
  }

  .menu-mobile-item-list {
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .menu-mobile-item-box {
    width: 100%;
    height: 100%;
    padding: 100px;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }

  .menu-mobile-item-item {
    width: max-content;
    margin: 20px 0;
  }
  .menu-mobile-item-item-active p {
    color: #4bffa5 !important;
  }
  .menu-mobile-item-item p {
    color: #ccc;
    font-weight: 500;
    font-size: 28px;
    cursor: pointer;
    transition: 1s;
  }
  .menu-mobile-item-item:hover p {
    color: #4bffa5;
  }
  .menu-mobile-container-open {
    opacity: 1;
    visibility: visible;
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  justify-content: center;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 24px;
    color: #fff;
    transition: 0.5s;
  }

  &:hover .icon {
    color: #4bffa5;
    transition: 0.5s;
    transform: rotate(90deg);
  }

  @media (max-width: 1199px) {
    opacity: 1;
    visibility: visible;
  }
  @media (max-width: 850px) {
    right: 20px;
    top: 30px;
  }
  @media (max-width: 650px) {
    right: 10px;
  }
  @media (max-width: 450px) {
    top: 20px;
  }
`;

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
