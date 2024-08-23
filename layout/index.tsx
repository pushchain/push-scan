// React, NextJS imports
import React from 'react';

// External Library imports
import { Box, Text, Add, CaretLeft, CaretRight } from '../blocks';
import { useMediaQuery, useScrollTrigger } from '@mui/material';

// Internal Components imports
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';

export default function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width:480px)');

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="100%"
      margin={`spacing-none ${isMobile ? 'spacing-xs' : 'spacing-xxxl'}`}
      gap="spacing-lg"
    >
      <HeaderSection />
      {children}
      <FooterSection />
    </Box>
  );
}
