import styled from 'styled-components';
import { grayColor, redColor, transition } from 'utils/variables.styled';

export const TitleWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TitleAuthorRewiews = styled.p`
  font-size: 20px;
  line-height: calc(24px / 20px);
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: calc(19px / 16px);
  text-transform: lowercase;

  color: ${grayColor};
`;

export const TextReadMore = styled.span`
  color: inherit;
  cursor: pointer;
  transition: ${transition};

  &:hover {
    color: ${redColor};
  }
`;
