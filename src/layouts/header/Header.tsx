import React from 'react';
import { headerColor, headerTextColor } from '../../styles/Themes';
import { HomeButton } from '../../views/homepage/HomePage.styled';
import { SingleLine } from '../../components/generic/Styled';
import { Cpu, Zap } from '../../components/generic/Icons';
import { Section } from '../../components/section/Section';
import { Link } from '../../components/link/Link';
import {
  LinkWrapper,
  HeaderStyle,
  HeaderLine,
  HeaderTitle,
  IconPadding,
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
            <Link underline={'transaparent'} to="/faq">
              <LinkWrapper>Faq</LinkWrapper>
            </Link>
            <Link underline={'transaparent'} to="/terms">
              <LinkWrapper>Terms</LinkWrapper>
            </Link>
            <Link underline={'transaparent'} to="/privacy">
              <LinkWrapper last={true}>Privacy</LinkWrapper>
            </Link>
            <Link
              underline={'transaparent'}
              href="https://github.com/apotdevin/thunderhub"
            >
              <HomeButton>
                <Zap fillcolor={'white'} color={'white'} />
              </HomeButton>
            </Link>
          </SingleLine>
        </HeaderLine>
      </HeaderStyle>
    </Section>
  );
};
