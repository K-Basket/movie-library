import styled from 'styled-components';
import {
  blackColor,
  device,
  grayColor,
  redColor,
  shadow,
  transition,
} from 'utils/variables.styled';

const gapGridTopMob = 23;
const gapGridLeftMob = 18;
const numberOfCardsMob = 2;

const gapGridTopTablet = 18;
const gapGridLeftTablet = 15;
const numberOfCardsTablet = 4;

const gapGridTopDesktop = 18;
const gapGridLeftDesktop = 15;
const numberOfCardsDesktop = 6;

export const CardCast = styled.ul`
  /* & * {
    outline: 1px solid blueviolet; //
  } */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: -${gapGridTopMob}px;
  margin-left: -${gapGridLeftMob}px;
  margin-bottom: 35px;

  @media ${device.tablet} {
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
  flex-basis: calc(100% / ${numberOfCardsMob} - ${gapGridLeftMob}px);
  margin-top: ${gapGridTopMob}px;
  margin-left: ${gapGridLeftMob}px;
  margin-bottom: 0px;
  transition: scale ${transition};
  cursor: pointer;

  &:hover {
    scale: 1.007;
  }

  @media ${device.tablet} {
    flex-basis: calc(100% / ${numberOfCardsTablet} - ${gapGridLeftTablet}px);
    margin-top: ${gapGridTopTablet}px;
    margin-left: ${gapGridLeftTablet}px;
    margin-bottom: 0px;
    transition: scale ${transition};
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

export const CardImg = styled.div`
  min-height: 234px;

  @media ${device.tablet} {
    min-height: 200px;
  }

  @media ${device.desktop} {
    min-height: 246px;
  }
`;

export const CardContent = styled.div`
  flex-grow: 1;
  padding: 10px;
`;

export const TitleName = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24px / 18px);

  color: ${blackColor};
`;

export const TitleCharacter = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24px / 16pxpx);

  color: ${redColor};
`;

export const TitlePopularity = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18px / 12px);

  color: ${grayColor};
`;
