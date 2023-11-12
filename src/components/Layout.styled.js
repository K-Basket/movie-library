import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  bgColor,
  blackColor,
  device,
  grayColor,
  shadow,
  transition,
  whiteColor,
} from 'utils/variables.styled';

import headerBgDesk1x from '../images/header-bg-desk-1x.jpg';
import headerBgDesk2x from '../images/header-bg-desk-2x.jpg';
import headerBgMob1x from '../images/header-bg-mob-1x.jpg';
import headerBgMob2x from '../images/header-bg-mob-2x.jpg';
import headerBgTabl1x from '../images/header-bg-tabl-1x.jpg';
import headerBgTabl2x from '../images/header-bg-tabl-2x.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${whiteColor};
`;

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 460px;

  padding: 0 14px;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 65.37%
    ),
    url(${headerBgMob1x});

  // Background image adaptation
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.4) 65.37%
      ),
      url(${headerBgMob2x});
  }

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #c4c4c4;
  border: none;
  border-radius: 15px;

  @media ${device.tablet} {
    position: relative;
    padding: 0 16px;
    height: 222px;

    background-image: linear-gradient(
        -273.67deg,
        rgba(0, 0, 0, 0.49) -2.09%,
        rgba(0, 0, 0, 0) 99.83%
      ),
      url(${headerBgTabl1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          -273.67deg,
          rgba(0, 0, 0, 0.49) -2.09%,
          rgba(0, 0, 0, 0) 99.83%
        ),
        url(${headerBgTabl2x});
    }
  }

  @media ${device.desktop} {
    padding: 0 32px;
    height: 316px;

    background-image: linear-gradient(
        -273.67deg,
        rgba(0, 0, 0, 0.49) -2.09%,
        rgba(0, 0, 0, 0) 99.83%
      ),
      url(${headerBgDesk1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          -273.67deg,
          rgba(0, 0, 0, 0.49) -2.09%,
          rgba(0, 0, 0, 0) 99.83%
        ),
        url(${headerBgDesk2x});
    }
  }
`;

export const Nav = styled.nav`
  & form {
    position: relative;
  }

  @media ${device.tablet} {
    display: flex;
    gap: 4px;
    padding-top: 16px;
  }

  @media ${device.desktop} {
    gap: 8px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 10px 26px;
  display: inline-block;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;

  color: ${blackColor};
  background-color: ${whiteColor};

  border: none;
  border-radius: 100px;

  &:hover {
    transform: scale(1.03);
    transition: transform ${transition};
  }

  box-shadow: ${shadow};

  @media ${device.tablet} {
    padding: 12px 24px;
    order: 1;
    margin: 0;
  }

  @media ${device.desktop} {
    padding: 14px 32px;
  }

  &.active {
    color: ${whiteColor};
    background-color: ${blackColor};
  }
`;

export const Input = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  // margin-bottom: 312px;

  width: 100%;

  border: none;
  border-radius: 100px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: ${blackColor};

  @media ${device.tablet} {
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 16px;
    padding-right: 38px;
    margin: 0;

    font-size: 14px;
    line-height: calc(16 / 14);
  }

  @media ${device.desktop} {
    padding-top: 13px;
    padding-bottom: 13px;
    padding-right: 38px;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  stroke: ${blackColor};
  fill: none;
  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    transform: scale(1.15);
    transition: transform ${transition};
  }

  @media ${device.tablet} {
    right: 13px;
  }

  @media ${device.desktop} {
    top: 13px;
    right: 16px;
  }
`;

// Main

export const Main = styled.main`
  /* background-color: gray; */
  flex-grow: 1;
  /* flex: 1 0 auto; */
`;

// Footer

export const Footer = styled.footer`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: ${bgColor};

  & p {
    text-align: center;

    font-size: 16px;
    font-weight: 400;
    line-height: normal;

    color: ${grayColor};
  }
`;
