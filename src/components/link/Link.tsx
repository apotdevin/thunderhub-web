import React from 'react';
import styled, { css } from 'styled-components';
import { textColor, linkHighlight } from '../../styles/Themes';
import { ThemeSet } from 'styled-theming';
import RouterLink from 'next/link';

interface StyledProps {
  fontColor?: string | ThemeSet;
  underline?: string | ThemeSet;
  inheritColor?: boolean;
  fullWidth?: boolean;
}

const StyledLink = styled.a`
  cursor: pointer;
  color: ${({ fontColor, inheritColor }: StyledProps) =>
    inheritColor ? 'inherit' : fontColor ?? textColor};
  text-decoration: none;
  ${({ fullWidth }: StyledProps) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  :hover {
    background: linear-gradient(
      to bottom,
      ${({ underline }: StyledProps) => underline ?? linkHighlight} 0%,
      ${({ underline }: StyledProps) => underline ?? linkHighlight} 100%
    );
    background-position: 0 100%;
    background-size: 2px 2px;
    background-repeat: repeat-x;
  }
`;

const NoStyling = styled.a`
  text-decoration: none;
`;

interface LinkProps {
  children: any;
  href?: string;
  to?: string;
  color?: string | ThemeSet;
  underline?: string | ThemeSet;
  inheritColor?: boolean;
  fullWidth?: boolean;
  noStyling?: boolean;
}

export const Link = ({
  children,
  href,
  to,
  color,
  underline,
  inheritColor,
  fullWidth,
  noStyling,
}: LinkProps) => {
  const props = { fontColor: color, underline, inheritColor, fullWidth };

  if (!href && !to) return null;

  const CorrectLink = noStyling ? NoStyling : StyledLink;

  if (href) {
    return (
      <CorrectLink href={href} {...props}>
        {children}
      </CorrectLink>
    );
  }

  const linkProps = {
    href: to || '',
  };

  return (
    <RouterLink {...linkProps}>
      <CorrectLink {...props}>{children}</CorrectLink>
    </RouterLink>
  );
};
