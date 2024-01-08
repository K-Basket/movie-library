import styled from 'styled-components';
import { blackColor, device, transition } from 'utils/variables.styled';

export const Input = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;

  width: 100%;

  border: none;
  border-radius: 100px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  color: ${blackColor};

  @media ${device.tablet} {
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 16px;
    padding-right: 38px;
    margin: 0;

    font-size: 14px;
    line-height: calc(16 / 14);
  }

  @media ${device.desktop} {
    padding-top: 13px;
    padding-bottom: 13px;
    padding-right: 38px;

    font-size: 14px;
    line-height: calc(16 / 14);
  }
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);

  stroke: ${blackColor};
  fill: none;
  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    transform: translate(0, -50%) scale(1.15);
    transition: transform ${transition};
  }

  @media ${device.tablet} {
    right: 13px;
  }

  @media ${device.desktop} {
    right: 16px;
  }
`;
