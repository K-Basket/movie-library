import styled from 'styled-components';
import { redColor, whiteColor } from 'utils/variables.styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 3%;
  right: 2%;

  padding: 10px;
  border: none;
  border-radius: 100%;
  fill: ${whiteColor};
  background-color: ${redColor};
`;
