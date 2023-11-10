import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  margin-right: 10px;
  color: black;

  &.active {
    color: green;
    background-color: rgb(230, 230, 230);
  }
`;
