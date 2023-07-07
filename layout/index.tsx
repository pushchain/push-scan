// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid } from '@mui/material';

// Internal Components imports
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';

export default function Layout({ children }) {
  return (
    <Grid width="100%">
      <HeaderSection />
      {children}
      <FooterSection />
    </Grid>
  );
}
