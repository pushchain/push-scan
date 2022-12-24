// React, NextJS imports
import React from 'react';
import Head from 'next/head';

// External Library imports
import { Grid } from '@mui/material';

// Internal Components imports
import Navbar from '../../components/Navbar';
import RequiresAuth from '../../components/RequireAuth';
import DashBoardView from '../../__pages__/dashboard';
import Footer from '../../components/Footer';

export default function Dashboard() {
  return (
    <RequiresAuth>
      <Head>
        <title>Push Analytics DashBoard</title>
      </Head>
      <Grid width="100%">
        <Navbar />
        <DashBoardView />
        <Footer />
      </Grid>
    </RequiresAuth>
  );
}
