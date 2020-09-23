import React, { useRef, useState } from 'react';
import {
  Headline,
  HomeButton,
  HomeTitle,
  HomeText,
  HomeButtonWrapper,
} from './HomePage.styled';
import { Zap } from 'react-feather';
import { inverseTextColor } from '../../styles/Themes';
import { Section } from '../../components/section/Section';
import { Padding } from './Sections.styled';
import { Link } from '../../components/link/Link';
import { useTransition, animated, useChain } from 'react-spring';

export const TopSection = () => {
  const [state] = useState(true);

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  const transition = useTransition(state, null, {
    from: { transform: 'translate3d(0,-80px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    ref: firstRef,
  });

  const transition2 = useTransition(state, null, {
    from: { transform: 'translate3d(0,-80px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    ref: secondRef,
  });

  const transition3 = useTransition(state, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    ref: thirdRef,
  });

  useChain([firstRef, secondRef, thirdRef], [0, 0.4, 0.8]);

  const renderButton = () => (
    <HomeButtonWrapper>
      <Link
        href="https://github.com/apotdevin/thunderhub"
        underline={'transparent'}
      >
        <HomeButton>
          <Padding>
            <Zap fill={'white'} color={'white'} />
          </Padding>
          Control The Lightning
        </HomeButton>
      </Link>
    </HomeButtonWrapper>
  );

  return (
    <Section color={'transparent'} textColor={inverseTextColor}>
      <Headline>
        {transition.map(({ props }, index) => (
          <animated.div style={props} key={index}>
            <HomeTitle>Control the Lightning</HomeTitle>
          </animated.div>
        ))}
        {transition2.map(({ props }, index) => (
          <animated.div style={props} key={index}>
            <HomeText>
              Monitor and manage your node from any browser and any device.
            </HomeText>
          </animated.div>
        ))}
        {transition3.map(({ props }, index) => (
          <animated.div style={props} key={index}>
            {renderButton()}
          </animated.div>
        ))}
      </Headline>
    </Section>
  );
};
