import React from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
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
