import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { redColor, shadow, whiteColor } from 'utils/variables.styled';

export const BtnGoToBack = styled(Link)`
  padding: 10px 26px;
  display: inline-block;

  font-weight: 500;
  font-size: 10px;
  line-height: calc(12 / 10);
  text-transform: uppercase;

  color: ${whiteColor};
  background-color: ${redColor};

  border: none;
  border-radius: 100px;
  box-shadow: ${shadow};
`;
