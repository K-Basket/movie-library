import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  blackColor,
  device,
  grayColor,
  redColor,
  shadow,
  whiteColor,
} from 'utils/variables.styled';

export const Section = styled.section`
  padding: 25px 0;
`;

export const TitleWrapp = styled.div`
  /* text-align: center; */

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;

  font-size: 25px;
  font-weight: 500;
  line-height: normal;

  color: ${blackColor};

  @media ${device.tablet} {
    margin-bottom: 0;
    font-size: 30px;
  }

  @media ${device.desktop} {
    font-size: 35px;
  }
`;

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

export const AboutFilm = styled.ul`
  /* & * {
    outline: 1px solid blueviolet; //
  } */

  /* outline: 1px solid blueviolet; // */

  @media ${device.tablet} {
    display: flex;
  }
`;

export const ImageMovie = styled.li`
  & > img {
    border-radius: 15px;
  }

  @media ${device.tablet} {
    min-width: 320px;
    min-height: 480px;

    & > img {
      width: 320px;
      height: 480px;
    }
  }

  @media ${device.desktop} {
    min-width: 400px;
    min-height: 600px;

    & > img {
      width: 400px;
      height: 600px;
    }
  }
`;

export const DescriptionMovie = styled.li`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media ${device.tablet} {
    padding: 20px 15px 0px 20px;
    flex-grow: 1;
  }
  @media ${device.desktop} {
    padding-left: 35px;
  }
`;

export const Tagline = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: calc(24px / 20px);

  @media ${device.tablet} {
    font-size: 22px;
    line-height: calc(26px / 22px);
  }
`;

export const Item = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${device.desktop} {
    gap: 0;
  }
`;

export const Name = styled.li`
  min-width: 32%;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(20px / 18px);

  color: ${grayColor};

  @media ${device.tablet} {
    min-width: 40%;

    font-size: 20px;
    font-weight: 500;
    line-height: calc(24px / 20px);
  }

  @media ${device.desktop} {
    min-width: 22%;
  }
`;

export const Descript = styled.li`
  flex-grow: 1;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(20px / 18px);

  color: ${blackColor};

  @media ${device.tablet} {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24px / 20px);
  }
`;

export const wrappItemTablet = styled.div``;

export const ProductCompanies = styled.ul`
  /* outline: 1px solid salmon; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media ${device.tablet} {
    min-height: 250px;
  }
  @media ${device.desktop} {
    min-height: 350px;
    gap: 150px;
  }
`;

export const Company = styled.li``;
