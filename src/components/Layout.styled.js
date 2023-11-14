import styled from 'styled-components';
import { bgColor, device, whiteColor } from 'utils/variables.styled';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${whiteColor};

  & header {
    padding-top: 20px;
    padding-bottom: 20px;

    @media ${device.tablet} {
      padding-top: 32px;
      padding-bottom: 32px;
    }
  }

  & main {
    flex-grow: 1;
  }

  & footer {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${bgColor};

    @media ${device.tablet} {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
`;
