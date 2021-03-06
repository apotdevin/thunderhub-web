import React from 'react';
import { Section } from '../../components/section/Section';
import { fontColors, homeBackgroundColor } from '../../styles/Themes';
import { Send, GitHub, Mail } from 'react-feather';
import {
  Center,
  Question,
  SectionTitle,
  DetailCard,
  DetailLine,
  SmallText,
  IconMargin,
  IconTitle,
} from '../../components/typography/Styled';
import { Link } from '../../components/link/Link';

export const ContactSection = () => (
  <Section color={homeBackgroundColor} padding={'24px 0 80px'}>
    <Center>
      <SectionTitle textColor={fontColors.blue3}>
        Need to contact us?
      </SectionTitle>
    </Center>
    <DetailLine>
      <DetailCard>
        <Link noStyling={true} href={'https://t.me/thunderhub'}>
          <Question>
            <IconTitle>
              <IconMargin>
                <Send size={'24px'} />
              </IconMargin>
              Telegram
            </IconTitle>
          </Question>
          <SmallText>
            Join the chat on Telegram. Usually the quickest reponse.
          </SmallText>
        </Link>
      </DetailCard>
      <DetailCard>
        <Link noStyling={true} href={'https://github.com/apotdevin/thunderhub'}>
          <Question>
            <IconTitle>
              <IconMargin>
                <GitHub size={'24px'} />
              </IconMargin>
              Github
            </IconTitle>
          </Question>
          <SmallText>
            See the code, open issues or contribute on github.
          </SmallText>
        </Link>
      </DetailCard>
      <DetailCard>
        <Link noStyling={true} href={'mailto:thunderhub@protonmail.com'}>
          <Question>
            <IconTitle>
              <IconMargin>
                <Mail size={'24px'} />
              </IconMargin>
              Email
            </IconTitle>
          </Question>
          <SmallText>Write us an email at thunderhub@protonmail.com</SmallText>
        </Link>
      </DetailCard>
    </DetailLine>
  </Section>
);
