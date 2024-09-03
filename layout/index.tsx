import React from 'react';
import { Box } from '../blocks';
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';

export default function Layout({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin={{ initial: 'spacing-md spacing-xxxl spacing-none spacing-xxxl', ml: 'spacing-none spacing-xs' }}
      gap="spacing-lg"
    >
      <HeaderSection />
      {children}
      <FooterSection />
    </Box>
  );
}
