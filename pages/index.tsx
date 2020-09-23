import React from 'react';
import { TopSection } from '../src/views/homepage/Top';
import { DetailSection } from '../src/views/homepage/DetailSection';
import { Compatible } from '../src/views/homepage/Compatible';
import { InfoSection } from '../src/views/homepage/InfoSection';
import { CallToAction } from '../src/views/homepage/CallToAction';
import { ContactSection } from '../src/views/homepage/ContactSection';
import { Integrations } from '../src/views/homepage/Integrations';
import { TechStack } from '../src/views/homepage/TechStack';
import { ThunderStorm } from '../src/views/homepage/Sections.styled';

const HomePageView = () => {
  return (
    <>
      <ThunderStorm alt={''} src={'/static/thunderstorm.gif'} />
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
