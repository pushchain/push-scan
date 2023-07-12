// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
import { DashboardLoader } from '../../components/Loader/DashboardLoader';
const DashBoardView = dynamic(() => import('../../sections/Dashboard'), {
  loading: () => <DashboardLoader />,
});
const Layout = dynamic(() => import('../../layout'));

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Push Analytics DashBoard</title>
      </Head>
      <Layout>
        <DashBoardView />
      </Layout>
    </>
  );
}
