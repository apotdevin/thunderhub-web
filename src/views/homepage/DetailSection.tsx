import React from 'react';
import {
  Card,
  SubTitle,
  ColumnLine,
  Sub4Title,
  ResponsiveLine,
} from '../../components/generic/Styled';
import styled from 'styled-components';
import { Eye, Send, GitBranch, Sliders, Users, Activity } from 'react-feather';
import { cardColor, mediaWidths } from '../../styles/Themes';
import { Section } from '../../components/section/Section';

const Padding = styled.div`
  padding: ${({ padding }: { padding?: string }) =>
    padding ? padding : '16px'};
`;

const DetailCard = styled(Card)`
  background-color: ${cardColor};
  margin-bottom: 0;
  margin: 8px 16px;
  z-index: 1;
  flex: 1 0 30%;

  @media (${mediaWidths.mobile}) {
    min-width: 160px;
    text-align: center;
  }
`;

const DetailLine = styled.div`
  margin: 0 -16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (${mediaWidths.mobile}) {
    margin: 0 -16px;
    flex-wrap: nowrap;
    overflow-y: auto;
    align-items: stretch;
    justify-content: flex-start;
  }
`;

const detailCardContent = (title: string, text: string, Icon: any) => (
  <DetailCard>
    <ResponsiveLine>
      <Padding>
        <Icon size={'40px'} strokeWidth={'1px'} />
      </Padding>
      <ColumnLine>
        <SubTitle fontWeight={'800'}>{title}</SubTitle>
        <Sub4Title>{text}</Sub4Title>
      </ColumnLine>
    </ResponsiveLine>
  </DetailCard>
);

export const DetailSection = () => {
  return (
    <Section padding={'0 0 48px'} withColor={false}>
      <DetailLine>
        {detailCardContent(
          'Make Payments',
          'Send and receive both Lightning and On-Chain payments.',
          Send
        )}
        {detailCardContent(
          'Rebalancing',
          'Multiple options to rebalance your node.',
          Sliders
        )}
        {detailCardContent(
          'LN-URL',
          'Use ln-pay and ln-withdraw straight from the homepage.',
          Eye
        )}
        {detailCardContent(
          'MPP Enabled',
          'Multipath payments enabled when paying an invoice.',
          GitBranch
        )}
        {detailCardContent(
          'Open Source',
          "Don't trust anyone. Verify the code yourself.",
          Users
        )}
        {detailCardContent(
          'Manage Channels',
          'Open, close and monitor channel status and liquidity',
          Activity
        )}
      </DetailLine>
    </Section>
  );
};
