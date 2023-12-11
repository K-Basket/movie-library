import styled from 'styled-components';
import { device } from './variables.styled';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.mobile} {
    max-width: 480px;
  }

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.desktop} {
    max-width: 1280px;
  }
`;
