import React from 'react';
import { Box } from '../blocks';
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';
import { ContentLayout } from '../common'

export default function Layout({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ initial: "spacing-xxxl", ml: "spacing-lg" }}
      minHeight="100vh"
    >
      <HeaderSection />
      <ContentLayout>
        {children}
      </ContentLayout>
      <FooterSection />
    </Box>
  );
}
