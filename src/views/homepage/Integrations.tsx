import * as React from 'react';
import { Section } from '../../components/section/Section';
import { InfoRow, SectionsTitle } from './Sections.styled';
import { Text } from '../../components/typography/Styled';
import styled from 'styled-components';
import { mediaWidths, fontColors } from '../../styles/Themes';
import { Link } from '../../components/link/Link';

export const IntegrationButton = styled.button`
  cursor: pointer;
  outline: none;
  padding: 6px 24px;
  font-size: 16px;
  background-image: linear-gradient(to right, #fd5f00, #ffa940);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  white-space: nowrap;

  box-sizing: border-box;
  border: 3px solid transparent;

  &:hover {
    color: black;
    border: 3px solid #ffa940;
    background-image: unset;
    background: transparent;
  }
`;

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

const IntegrationCenterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IntegrationRaspi = styled.img`
  max-width: 260px;
  max-height: 130px;
`;

const IntegrationStart9 = styled.img`
  max-width: 260px;
  max-height: 130px;
  background: #333;
  border-radius: 16px;
  padding: 8px 16px;
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
            <IntegrationRaspi src={'/assets/BTCPay.svg'} />
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
            <IntegrationRaspi src={'/assets/raspilogo.png'} />
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
        <IntegrationInfoRow>
          <IntegrationStyledImage>
            <IntegrationRaspi src={'/assets/myNodeLogo.png'} />
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
        </IntegrationInfoRow>
        <IntegrationInfoRow>
          <IntegrationStyledImage>
            <IntegrationRaspi src={'/assets/voltageNew.png'} />
          </IntegrationStyledImage>
          <IntegrationStyledText>
            <Text>
              To use the Lightning Network at it's full capacity it's a must to
              have your own node but this can come with a cost and require more
              technical skills. Voltage removes all these burdens and let's you
              quickly and easily deploy production ready nodes. Now with
              ThunderHub integrated as well, you get an awesome UI to manage it
              all.
            </Text>
            <IntegrationCenterWrapper>
              <Link href="https://getvoltage.io/" underline={'transparent'}>
                <IntegrationButton>Voltage Website</IntegrationButton>
              </Link>
            </IntegrationCenterWrapper>
          </IntegrationStyledText>
        </IntegrationInfoRow>
        <IntegrationInfoRow>
          <IntegrationStyledImage>
            <IntegrationRaspi src={'/assets/umbrel.png'} />
          </IntegrationStyledImage>
          <IntegrationStyledText>
            <Text>
              Running a bitcoin and lightning node might seem like a difficult,
              programming intensive job to accomplish. With Umbrel everything is
              simplified and put behind an awesome and easy to use UI. Now with
              an App Store included, you can, with the click of a button, add
              the ThunderHub interface to take full control of your node.
            </Text>
            <IntegrationCenterWrapper>
              <Link href="https://getumbrel.com/" underline={'transparent'}>
                <IntegrationButton>Umbrel Website</IntegrationButton>
              </Link>
            </IntegrationCenterWrapper>
          </IntegrationStyledText>
        </IntegrationInfoRow>
        <InfoRow>
          <IntegrationStyledImage>
            <IntegrationStart9 src={'/assets/start9.png'} />
          </IntegrationStyledImage>
          <IntegrationStyledText>
            <Text>
              Start9's EmbassyOS is a revolution in personal computing away from
              the current, hosted, custodial model that breeds dependency and
              corruption, towards a decentralized model, where individuals have
              absolute control over their data and communications.
            </Text>
            <IntegrationCenterWrapper>
              <Link href="https://start9.com/" underline={'transparent'}>
                <IntegrationButton>Start9 Website</IntegrationButton>
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
