import styled from 'styled-components';
import { device, shadow, transition } from 'utils/variables.styled';

const gapGridTopTablet = 20;
const gapGridLeftTablet = 25;
const numberOfCardsTablet = 2;

const gapGridLeftDesktop = 25;
const gapGridTopDesktop = 30;
const numberOfCardsDesktop = 3;

export const CardSet = styled.ul`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    list-style: none;
    margin-top: -${gapGridTopTablet}px;
    margin-left: -${gapGridLeftTablet}px;
  }

  @media ${device.desktop} {
    margin-top: -${gapGridTopDesktop}px;
    margin-left: -${gapGridLeftDesktop}px;
  }
`;

export const Item = styled.li`
  margin-bottom: 20px;
  & * {
    outline: 1px solid blueviolet; // for visualization
  }

  @media ${device.tablet} {
    flex-basis: calc(100% / ${numberOfCardsTablet} - ${gapGridLeftTablet}px);
    margin-top: ${gapGridTopTablet}px;
    margin-left: ${gapGridLeftTablet}px;
    transition: scale ${transition};
    cursor: pointer;
  }

  @media ${device.desktop} {
    flex-basis: calc(100% / ${numberOfCardsDesktop} - ${gapGridLeftDesktop}px);
    margin-top: ${gapGridTopDesktop}px;
    margin-left: ${gapGridLeftDesktop}px;

    &:hover {
      scale: 1.007;
    }
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
  /* height: 574px;

  & img {
    height: 100%;
    object-fit: cover;
  } */
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 10px;
`;
