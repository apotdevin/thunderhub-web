import * as React from 'react';
import { Section } from '../../components/section/Section';
import BTCPay from '../../assets/BTCPay.svg';
import { InfoRow } from './Sections.styled';
import { Text } from '../../components/typography/Styled';
import styled from 'styled-components';
import { mediaWidths, fontColors } from '../../styles/Themes';
import { Link } from '../../components/link/Link';
import { HomeButton } from './HomePage.styled';

const IntegrationStyledImage = styled.div`
  width: 40%;
  text-align: center;

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

const IntegrationTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 32px;

  @media (${mediaWidths.mobile}) {
    font-size: 24px;
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

export const Integrations = () => {
  return (
    <>
      <Section padding={'40px 0 100px'}>
        <IntegrationTitle>Integrations</IntegrationTitle>
        <InfoRow>
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
                href="https://medium.com/@apotdevin/setting-up-btcpay-with-thunderhub-in-5-minutes-392632c00758"
                underline={'transparent'}
              >
                <IntegrationButton>BTCPay Tutorial</IntegrationButton>
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
