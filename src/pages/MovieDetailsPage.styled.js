import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  blackColor,
  grayColor,
  redColor,
  shadow,
  whiteColor,
} from 'utils/variables.styled';

export const Section = styled.section`
  /* outline: 1px solid green;
  background-color: #fefdf4; */

  padding: 25px 0;
`;

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 33px;
  font-weight: 500;
  line-height: normal;

  color: ${blackColor};
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

  display: flex;
`;

export const ImageMovie = styled.li`
  min-width: 400px;
  min-height: 600px;

  & img {
    width: 400px;
    height: 600px;
    border-radius: 15px;
  }
`;

export const DescriptionMovie = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 15px 20px 35px;
  flex-grow: 1;
`;

export const Item = styled.ul`
  display: flex;
  align-items: center;
`;

export const Name = styled.li`
  min-width: 30%;

  font-size: 20px;
  font-weight: 500;
  line-height: calc(24px / 20px);

  color: ${grayColor};
`;

export const Descript = styled.li`
  flex-grow: 1;

  font-size: 20px;
  font-weight: 500;
  line-height: calc(24px / 20px);

  color: ${blackColor};
`;

export const ProductCompanies = styled.ul`
  /* padding: 100px 0; */
  min-height: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;

export const Company = styled.li``;
