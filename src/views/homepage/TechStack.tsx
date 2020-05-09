import * as React from 'react';
import { SectionsTitle } from './Sections.styled';
import { Section } from '../../components/section/Section';
import styled from 'styled-components';
import { mediaWidths } from '../../styles/Themes';

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechCard = styled.div`
  width: 160px;
  margin: 8px 16px;

  @media (${mediaWidths.mobile}) {
    width: 120px;
  }
`;

const TechImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TechStack = () => {
  return (
    <Section padding={'80px 0 40px'}>
      <SectionsTitle>Tech Stack</SectionsTitle>
      <TechRow>
        <TechCard>
          <TechImage src={'/static/tech/nodejs.png'} />
        </TechCard>
        <TechCard>
          <TechImage src={'/static/tech/nextjs.png'} />
        </TechCard>
        <TechCard>
          <TechImage src={'/static/tech/reactjs.png'} />
        </TechCard>
        <TechCard>
          <TechImage src={'/static/tech/graphql.png'} />
        </TechCard>
        <TechCard>
          <TechImage src={'/static/tech/apollo.png'} />
        </TechCard>
      </TechRow>
    </Section>
  );
};
