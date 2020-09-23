import styled from 'styled-components';
import { fontColors, mediaWidths } from '../../styles/Themes';

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0 80px;

  @media (${mediaWidths.mobile}) {
    flex-direction: column;
    padding: 0 0 32px;
    width: 100%;
  }
`;

export const HomeButton = styled.button`
  cursor: pointer;
  outline: none;
  padding: 6px 24px;
  text-decoration: 2px solid blue;
  font-size: 16px;
  background-image: linear-gradient(to right, #fd5f00, #f99325);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  white-space: nowrap;
  width: 100%;
  box-sizing: border-box;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid #fd5f00;
    background-image: unset;
    background: transparent;
  }
`;

export const HomeTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: ${({ textColor }: { textColor?: string }) =>
    textColor ? textColor : fontColors.white};
  font-size: 56px;
  margin: 0;
  font-weight: 900;

  @media (${mediaWidths.mobile}) {
    font-size: 24px;
  }
`;

export const HomeText = styled.p`
  margin-top: 16px;
  color: ${fontColors.white};
  text-align: center;
  font-size: 20px;

  @media (${mediaWidths.mobile}) {
    font-size: 15px;
  }
`;

export const HomeButtonWrapper = styled.div`
  max-width: 240px;
  padding-top: 32px;
`;
