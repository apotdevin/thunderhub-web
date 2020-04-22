import React from 'react';
import { Section } from '../../components/section/Section';
import { Link } from '../../components/link/Link';
import { Emoji } from '../../components/emoji/Emoji';
import RouterLink from 'next/link';
import { Zap } from '../../components/generic/Icons';
import getConfig from 'next/config';
import { headerColor, fontColors } from '../../styles/Themes';
import {
  FooterWrapper,
  FooterStyle,
  SideFooter,
  Line,
  Title,
  Version,
  SideText,
  CopyrightText,
  RightFooter,
  StyledRouter,
} from './Footer.styled';
import { HomeButton } from '../../views/homepage/HomePage.styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Section withColor={true} color={headerColor}>
        <FooterStyle>
          <SideFooter>
            <Link to={'/'}>
              <Title>ThunderHub</Title>
            </Link>
            <SideText>
              Open-source lightning node manager to control and monitor your LND
              node.
            </SideText>
            <SideText>
              Made in Munich with <Emoji symbol={'🧡'} label={'heart'} /> and{' '}
              <Emoji symbol={'⚡'} label={'lightning'} />.
            </SideText>
            <CopyrightText>
              Copyright © 2020. All rights reserved. ThunderHub
            </CopyrightText>
          </SideFooter>
          <RightFooter>
            <Link to={'/faq'} color={fontColors.blue}>
              FAQ
            </Link>
            <Link
              href={'https://github.com/apotdevin/thunderhub'}
              color={fontColors.blue}
            >
              Github
            </Link>
            <Link
              href={'https://twitter.com/thunderhubio'}
              color={fontColors.blue}
            >
              Twitter
            </Link>
            <Link to={'/terms'} color={fontColors.blue}>
              Terms of Use
            </Link>
            <Link to={'/privacy'} color={fontColors.blue}>
              Privacy Policy
            </Link>
            <Link
              noStyling={true}
              href={'https://github.com/apotdevin/thunderhub'}
            >
              <StyledRouter>
                <HomeButton>
                  <Zap fillcolor={'white'} color={'white'} />
                </HomeButton>
              </StyledRouter>
            </Link>
          </RightFooter>
        </FooterStyle>
      </Section>
    </FooterWrapper>
  );
};
