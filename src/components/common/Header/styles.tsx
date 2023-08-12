import { styled } from 'styled-components';

import { colors } from '@/constants/theme';

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  padding: 40px 80px;
  left: 0;
  top: 0;
  width: 100%;
  background-color: transparent;
  transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  -moz-transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  -webkit-transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  -o-transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  z-index: 99999;

  @media (max-width: 1199px) {
    padding: 40px 50px;
  }
  @media (max-width: 850px) {
    padding: 30px 30px;
  }
  @media (max-width: 650px) {
    padding: 30px 30px;
  }
  @media (max-width: 450px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.div`
  font-size: 38px;
  color: #ccc;
  position: relative;
  flex: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 5px;
    background-color: #4bffa5;
    border-bottom-right-radius: 20px;
  }

  @media (max-width: 650px) {
    font-size: 34px;
  }

  @media (max-width: 450px) {
    font-size: 32px;
    min-width: 200px;
  }

  @media (max-width: 350px) {
    font-size: 30px;
    min-width: 150px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1199px) {
    display: none !important;
  }
`;

export const NavBarItem = styled.div<{ isActive: boolean }>`
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
