import * as React from 'react';
import { Section } from '../../components/section/Section';
import BTCPay from '../../assets/BTCPay.svg';
import { InfoRow, SectionsTitle } from './Sections.styled';
import { Text } from '../../components/typography/Styled';
import styled from 'styled-components';
import { mediaWidths, fontColors } from '../../styles/Themes';
import { Link } from '../../components/link/Link';
import { HomeButton } from './HomePage.styled';
import raspilogo from '../../assets/raspilogo.png';
import myNode from '../../assets/myNode.png';

const IntegrationStyledImage = styled.div`
  width: 40%;
  text-align: center;
  align-self: center;

  @media (${mediaWidths.mobile}) {
    width: 100%;
  }
`;

const IntegrationStyledText = styled.div`
  width: 60%;
  text-align: center;

  @media (${mediaWidths.mobile}) {
    width: 100%;
  }
`;

const IntegrationMoreText = styled.p`
  width: 60%;
  text-align: center;
  margin: 100px 0 0;
  color: ${fontColors.grey4};
  font-weight: bold;
  @media (${mediaWidths.mobile}) {
    margin: 80px 0 40px;
  }
`;

const IntegrationButton = styled(HomeButton)`
  background-image: linear-gradient(to right, #1ba000, #1ba000);
  width: unset;
`;

const IntegrationCenterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IntegrationRaspi = styled.img`
  max-width: 260px;
`;

const IntegrationInfoRow = styled(InfoRow)`
  padding-bottom: 32px;

  @media (${mediaWidths.mobile}) {
    padding-bottom: 60px;
  }
`;

export const Integrations = () => {
  return (
    <>
      <Section padding={'40px 0 100px'}>
        <SectionsTitle>Integrations</SectionsTitle>
        <IntegrationInfoRow>
          <IntegrationStyledImage>
            <BTCPay />
          </IntegrationStyledImage>
          <IntegrationStyledText>
            <Text>
              ThunderHub is integrated into BTCPay so that you can quickly and
              easily get it running. If you want to add ThunderHub to an
              existing BTCPay server or want to create one from zero, check out
              this tutorial.
            </Text>
            <IntegrationCenterWrapper>
              <Link
                href="https://apotdevin.com/blog/thunderhub-btcpay"
                underline={'transparent'}
              >
                <IntegrationButton>BTCPay Tutorial</IntegrationButton>
              </Link>
            </IntegrationCenterWrapper>
          </IntegrationStyledText>
        </IntegrationInfoRow>
        <IntegrationInfoRow>
          <IntegrationStyledImage>
            <IntegrationRaspi src={raspilogo} />
          </IntegrationStyledImage>
          <IntegrationStyledText>
            <Text>
              RaspiBlitz is a great tool to get your own node up and running
              with a cool display. It also has the possibility of extending it's
              functionality with multiple other tools. Check out these
              instructions from
              <Link href="https://twitter.com/openoms">{' @openoms '}</Link>
              on how to setup ThunderHub.
            </Text>
            <IntegrationCenterWrapper>
              <Link
                href="https://gist.github.com/openoms/8ba963915c786ce01892f2c9fa2707bc"
                underline={'transparent'}
              >
                <IntegrationButton>RaspiBlitz Setup</IntegrationButton>
              </Link>
            </IntegrationCenterWrapper>
          </IntegrationStyledText>
        </IntegrationInfoRow>
        <InfoRow>
          <IntegrationStyledImage>
            <IntegrationRaspi src={myNode} />
          </IntegrationStyledImage>
          <IntegrationStyledText>
            <Text>
              MyNode is one of the easiest ways to run a dedicated, easy to use,
              Bitcoin Node and Lightning Wallet. Now with ThunderHub and more of
              the best open source software around, myNode makes it easy, safe
              and secure to use Bitcoin and Lightning.
            </Text>
            <IntegrationCenterWrapper>
              <Link href="https://mynodebtc.com/" underline={'transparent'}>
                <IntegrationButton>MyNode Website</IntegrationButton>
              </Link>
            </IntegrationCenterWrapper>
          </IntegrationStyledText>
        </InfoRow>
        <IntegrationCenterWrapper>
          <IntegrationMoreText>
            We are constantly looking to get integrated into more services. If
            you have any service you would like to see us on, contact us!
          </IntegrationMoreText>
        </IntegrationCenterWrapper>
      </Section>
    </>
  );
};
