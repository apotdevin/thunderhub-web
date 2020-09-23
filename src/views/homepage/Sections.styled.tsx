import styled from 'styled-components';
import { headerColor, mediaWidths } from '../../styles/Themes';

export const ThunderStorm = styled.img`
  height: 450px;
  width: 100%;
  top: 0px;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  background-color: ${headerColor};

  @media (${mediaWidths.mobile}) {
    font-size: 15px;
  }
`;

export const Padding = styled.div`
  padding: 4px 4px 0 0;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;

  @media (${mediaWidths.mobile}) {
    flex-direction: ${({ reverse }: { reverse?: boolean }) =>
      reverse ? 'column-reverse' : 'column'};
  }
`;

const HalfSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (${mediaWidths.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

export const ImageSection = styled(HalfSection)`
  align-self: center;
`;

export const TextSection = styled(HalfSection)`
  padding: 0 32px;

  @media (${mediaWidths.mobile}) {
    padding: 0 8px;
  }
`;

export const ImagePlace = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const StyledH1 = styled.h1``;

export const StyledH2 = styled.h2``;

export const ClippedSection = styled.div`
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);

  @media (${mediaWidths.mobile}) {
    clip-path: polygon(0 2%, 100% 0, 100% 98%, 0 100%);
  }
`;

export const SectionsTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 32px;

  @media (${mediaWidths.mobile}) {
    font-size: 24px;
  }
`;
