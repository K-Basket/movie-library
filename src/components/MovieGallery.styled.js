import styled from 'styled-components';
import {
  blackColor,
  device,
  redColor,
  shadow,
  transition,
} from 'utils/variables.styled';

const gapGridTopTablet = 23;
const gapGridLeftTablet = 18;
const numberOfCardsTablet = 3;

const gapGridTopDesktop = 30;
const gapGridLeftDesktop = 20;
const numberOfCardsDesktop = 4;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 17px;
  line-height: calc(19 / 17);
  font-weight: 500;
  color: ${blackColor};

  & span {
    color: ${redColor};
  }

  @media ${device.tablet} {
    margin-bottom: 12px;
    font-size: 21px;
    line-height: calc(24 / 21);
  }

  @media ${device.desktop} {
    margin-bottom: 15px;
    font-size: 26px;
    line-height: calc(30 / 26);
  }
`;

export const CardSet = styled.ul`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: -${gapGridTopTablet}px;
    margin-left: -${gapGridLeftTablet}px;
    margin-bottom: 35px;
  }

  @media ${device.desktop} {
    margin-top: -${gapGridTopDesktop}px;
    margin-left: -${gapGridLeftDesktop}px;
    margin-bottom: 50px;
  }
`;

export const Item = styled.li`
  margin-bottom: 30px;

  @media ${device.tablet} {
    flex-basis: calc(100% / ${numberOfCardsTablet} - ${gapGridLeftTablet}px);
    margin-top: ${gapGridTopTablet}px;
    margin-left: ${gapGridLeftTablet}px;
    margin-bottom: 0px;
    transition: scale ${transition};
    cursor: pointer;

    &:hover {
      scale: 1.007;
    }
  }

  @media ${device.desktop} {
    flex-basis: calc(100% / ${numberOfCardsDesktop} - ${gapGridLeftDesktop}px);
    margin-top: ${gapGridTopDesktop}px;
    margin-left: ${gapGridLeftDesktop}px;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  box-shadow: ${shadow};
  border-radius: 10px;
  overflow: hidden;
`;

export const CardThumb = styled.div`
  position: relative;
  & img {
    height: 660px;
  }

  @media ${device.tablet} {
    & img {
      height: 346px;
    }
  }

  @media ${device.desktop} {
    & img {
      height: 445px;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 10px;

  & h2 {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;

    color: ${blackColor};

    @media ${device.desktop} {
      font-size: 16px;
      font-weight: 500;
      line-height: calc(19 / 16);
    }
  }

  & p {
    font-size: 12px;
    font-weight: 500;
    line-height: calc(16 / 12);

    color: ${redColor};

    @media ${device.desktop} {
      font-size: 16px;
      font-weight: 500;
      line-height: calc(19 / 16);
    }
  }
`;
