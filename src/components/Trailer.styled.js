import YouTube from 'react-youtube';
import styled from 'styled-components';
import { blackColor, device, redColor } from 'utils/variables.styled';

export const WrappTrailer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const YoutubeStyle = styled(YouTube)`
  & > iframe {
    display: block;
    border-radius: 10px;
    width: calc(640px * 0.5);
    height: calc(390px * 0.5);

    @media ${device.tablet} {
      border-radius: 15px;
      width: calc(640px * 1);
      height: calc(390px * 1);
    }
  }
`;

export const Item = styled.ul`
  margin-top: 10px;
  padding: 10px;
  max-height: calc(390px * 0.5);

  overflow: auto;
  scroll-behavior: smooth;

  @media ${device.tablet} {
    width: calc(640px * 1);
    max-height: calc(390px * 0.7);
  }

  @media ${device.desktop} {
    max-height: calc(390px * 0.97);
    margin-top: 0;
    padding: 0 20px;
  }
`;

export const List = styled.li`
  font-size: 15px;
  font-weight: 500;
  line-height: calc(24px / 15px);

  color: ${({ $active }) => ($active ? redColor : blackColor)};
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media ${device.tablet} {
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }

  @media ${device.desktop} {
    font-size: 16px;
    line-height: calc(20px / 16px);
  }
`;
