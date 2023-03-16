import React from 'react';
import { headerColor, headerTextColor } from '../../styles/Themes';
import { HomeButton } from '../../views/homepage/HomePage.styled';
import { SingleLine } from '../../components/generic/Styled';
import { Cpu, GitHub, Twitter, Zap, Book, Send } from 'react-feather';
import { Section } from '../../components/section/Section';
import { Link } from '../../components/link/Link';
import {
  HeaderStyle,
  HeaderLine,
  HeaderTitle,
  IconPadding,
  IconWrapper,
} from './Header.styled';
import { useRouter } from 'next/dist/client/router';

export const Header = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <Section
      color={isHome ? 'transparent' : headerColor}
      textColor={headerTextColor}
    >
      <HeaderStyle>
        <HeaderLine>
          <Link to={'/'} underline={'transparent'}>
            <HeaderTitle>
              <IconPadding>
                <Cpu color={'white'} />
              </IconPadding>
              ThunderHub
            </HeaderTitle>
          </Link>
          <SingleLine>
            <Link
              noStyling={true}
              href={'https://github.com/apotdevin/thunderhub'}
            >
              <IconWrapper>
                <GitHub />
              </IconWrapper>
            </Link>
            <Link href={'https://twitter.com/thunderhubio'} noStyling={true}>
              <IconWrapper>
                <Twitter />
              </IconWrapper>
            </Link>
            <Link href={'https://t.me/thunderhub'} noStyling={true}>
              <IconWrapper>
                <Send />
              </IconWrapper>
            </Link>
            <Link href={'https://docs.thunderhub.io/'} noStyling={true}>
              <IconWrapper>
                <Book />
              </IconWrapper>
            </Link>
            <Link
              underline={'transaparent'}
              href="https://github.com/apotdevin/thunderhub"
            >
              <HomeButton>
                <Zap fill={'white'} color={'white'} />
              </HomeButton>
            </Link>
          </SingleLine>
        </HeaderLine>
      </HeaderStyle>
    </Section>
  );
};
