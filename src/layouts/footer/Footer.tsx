import React from 'react';
import { Section } from '../../components/section/Section';
import { Link } from '../../components/link/Link';
import { Emoji } from '../../components/emoji/Emoji';
import { Zap } from 'react-feather';
import { headerColor, fontColors } from '../../styles/Themes';
import {
  FooterWrapper,
  FooterStyle,
  SideFooter,
  Title,
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
              Copyright © 2020-{new Date().getFullYear()}. All rights reserved.
              ThunderHub
            </CopyrightText>
          </SideFooter>
          <RightFooter>
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
            <Link href={'https://docs.thunderhub.io/'} color={fontColors.blue}>
              Docs
            </Link>
            <Link
              noStyling={true}
              href={'https://github.com/apotdevin/thunderhub'}
            >
              <StyledRouter>
                <HomeButton>
                  <Zap fill={'white'} color={'white'} />
                </HomeButton>
              </StyledRouter>
            </Link>
          </RightFooter>
        </FooterStyle>
      </Section>
    </FooterWrapper>
  );
};
