import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import {
  blackColor,
  device,
  redColor,
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

export const HeaderWrap = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 460px; */
  height: 260px;

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
  margin-top: 14px;

  & form {
    position: relative;
    margin-top: 8px;
  }

  @media ${device.tablet} {
    display: flex;
    gap: 12px;

    & form {
      margin-top: 0px;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &:first-child {
    margin-right: 10px;
  }

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

    &:first-child {
      margin-right: 0px;
    }
  }

  @media ${device.desktop} {
    padding: 14px 32px;
  }

  &.active {
    color: ${whiteColor};
    background-color: ${blackColor};
  }
`;

export const SearchResult = styled.p`
  margin-top: 8px;
  padding-left: 14px;

  flex-grow: 1;

  font-size: 12px;
  font-weight: 400;
  color: ${whiteColor};
`;

export const WrappLogoBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const WrappBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;

  @media ${device.tablet} {
    gap: 12px;
    order: 1;
  }
`;

export const Button = styled.button`
  padding: 10px 26px;
  display: inline-block;

  font-weight: 500;
  font-size: 10px;
  line-height: calc(12 / 10);
  text-transform: uppercase;

  color: ${({ $active }) => ($active ? `${whiteColor}` : `${redColor}`)};
  background-color: ${({ $active }) =>
    $active ? `${redColor}` : `${whiteColor}`};

  border: none;
  border-radius: 100px;
  box-shadow: ${shadow};

  &:hover {
    transform: scale(1.03);
    transition: transform ${transition};
  }

  @media ${device.tablet} {
    padding-top: 12px;
    padding-bottom: 12px;

    font-size: 11px;
    line-height: calc(16 / 11);
  }
`;

export const WrappLinkLogo = styled.div`
  text-align: center;

  @media ${device.tablet} {
    text-align: start;
  }
`;

export const LinkLogo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 16px;
  }
  @media ${device.desktop} {
    gap: 16px;
    margin-bottom: 32px;
  }

  & svg {
    width: 32px;
    height: 32px;

    @media ${device.tablet} {
      width: 40px;
      height: 40px;
    }

    @media ${device.desktop} {
      width: 59px;
      height: 59px;
    }
  }

  & p {
    text-align: center;
    font-size: 32px;
    font-weight: 500;

    color: ${whiteColor};

    @media ${device.tablet} {
      font-size: 40px;
    }

    @media ${device.desktop} {
      font-size: 64px;
    }
  }
`;
