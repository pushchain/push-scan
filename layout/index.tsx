import React from 'react';
import { Box } from '../blocks';
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';

export default function Layout({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin={{ initial: 'spacing-lg spacing-xxxl', ml: 'spacing-sm spacing-xs' }}
      gap="spacing-lg"
    >
      <HeaderSection />
      {children}
      <FooterSection />
    </Box>
  );
}
