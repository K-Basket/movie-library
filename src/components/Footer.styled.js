import styled from 'styled-components';
import { device, grayColor } from 'utils/variables.styled';

export const FooterCont = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;

  color: ${grayColor};

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: 4px;

    font-size: 16px;
  }
`;
