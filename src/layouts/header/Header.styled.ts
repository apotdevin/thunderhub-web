import styled, { css } from 'styled-components';
import {
  headerTextColor,
  themeColors,
  mediaWidths,
  chartColors,
} from '../../styles/Themes';
import { SingleLine } from '../../components/generic/Styled';

export const HeaderStyle = styled.div`
  padding: 16px 0;
`;

export const IconPadding = styled.div`
  padding-right: 6px;
  margin-bottom: -4px;
`;

export const HeaderTitle = styled.div`
  color: ${headerTextColor};
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${mediaWidths.mobile}) {
    margin-bottom: 16px;
  }
`;

export const IconWrapper = styled.div`
  color: white;
  margin: 0 24px 0 0;

  :hover {
    color: ${chartColors.orange};
  }
`;

export const LinkWrapper = styled.div`
  color: ${headerTextColor};
  margin: ${({ last }: { last?: boolean }) =>
    last ? '0 16px 0 4px' : '0 4px'};

  :hover {
    color: ${themeColors.blue2};
  }
`;

export const HeaderLine = styled(SingleLine)`
  @media (${mediaWidths.mobile}) {
    width: 100%;
    flex-direction: column;
  }
`;
