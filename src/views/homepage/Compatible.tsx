import React, { useState, useEffect } from 'react';
import { Center } from '../../components/typography/Styled';
import { Section } from '../../components/section/Section';
import { StyledH2, ClippedSection } from './Sections.styled';
import {
  homeCompatibleColor,
  inverseTextColor,
  mediaWidths,
} from '../../styles/Themes';
import { useTransition, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer'; // Polyfill
import styled from 'styled-components';

const StyledVersion = styled.div`
  font-size: 18px;
  padding: 4px 0;

  @media (${mediaWidths.mobile}) {
    padding: 0;
  }
`;

const AnimatedVersion = animated(StyledVersion);

const CompatibleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${mediaWidths.mobile}) {
    flex-direction: column-reverse;
  }
`;

const CompatibleColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 40px 0 60px;
  height: 300px;

  @media (${mediaWidths.mobile}) {
    padding: 0;
    height: 200px;
    width: 100%;
  }
`;

const CompatibleLND = styled.img`
  display: block;
  max-width: 260px;
  width: auto;
  height: auto;

  @media (${mediaWidths.mobile}) {
    max-width: 240px;
  }
`;

const WarningLND = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
`;

export const Compatible = () => {
  const [items, setItems] = useState<{ title: string; id: number }[]>([]);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setItems([
        { title: 'v0.18.x-beta', id: 7 },
        { title: 'v0.17.x-beta', id: 6 },
        { title: 'v0.16.x-beta', id: 5 },
        { title: 'v0.15.x-beta', id: 4 },
        { title: 'v0.14.x-beta', id: 3 },
        { title: 'v0.13.x-beta', id: 2 },
        { title: 'v0.12.x-beta', id: 1 },
        { title: 'v0.11.x-beta', id: 0 },
      ]);
    }
  }, [inView]);

  const transitions = useTransition(items, {
    trail: 1000,
    from: {
      transform: inView ? 'translate3d(80px,0,0)' : 'translate3d(0,0,0)',
      opacity: 0,
    },
    enter: { transform: 'translate3d(0,0,0)', opacity: inView ? 1 : 0 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120 },
  });

  return (
    <ClippedSection>
      <Section
        textColor={inverseTextColor}
        color={homeCompatibleColor}
        padding={'40px 0'}
      >
        <Center>
          <StyledH2>Compatible with the latest LND node versions.</StyledH2>
        </Center>
        <CompatibleRow ref={ref}>
          <CompatibleColumn>
            <CompatibleLND src={'/assets/LND.png'} />
          </CompatibleColumn>
          <CompatibleColumn>
            {inView &&
              transitions((styles, item) => (
                <AnimatedVersion style={styles}>{item.title}</AnimatedVersion>
              ))}
          </CompatibleColumn>
        </CompatibleRow>
        <WarningLND>
          *A vulnerability was disclosed for LND version's below 0.11.0. You are
          at risk of losing funds if you are on version 0.10.x or below.
        </WarningLND>
      </Section>
    </ClippedSection>
  );
};
