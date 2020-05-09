import React from 'react';
import { TopSection } from '../src/views/homepage/Top';
import { DetailSection } from '../src/views/homepage/DetailSection';
import { Compatible } from '../src/views/homepage/Compatible';
import { InfoSection } from '../src/views/homepage/InfoSection';
import { CallToAction } from '../src/views/homepage/CallToAction';
import { ContactSection } from '../src/views/homepage/ContactSection';
import { Integrations } from '../src/views/homepage/Integrations';
import { TechStack } from '../src/views/homepage/TechStack';

const HomePageView = () => {
  return (
    <>
      <TopSection />
      <DetailSection />
      <Integrations />
      <Compatible />
      <TechStack />
      <InfoSection />
      <CallToAction />
      <ContactSection />
    </>
  );
};

export default HomePageView;
