import styled from 'styled-components';
import { grayColor, redColor, transition } from 'utils/variables.styled';

export const Button = styled.button`
  display: block;
  margin: 0 auto;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24px / 16px);

  border: none;
  background-color: initial;

  color: ${grayColor};
  transition: ${transition};

  &:hover {
    color: ${redColor};
    scale: 1.02;
  }
`;
