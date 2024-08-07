// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
import { TransactionLoader } from '../../components/Loader/TransactionLoader';

const TransactionView = dynamic(() => import('../../sections/Transactions'), {
  loading: () => <TransactionLoader />,
});

const Layout = dynamic(() => import('../../layout'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Push Transaction detail</title>
      </Head>
      <Layout>
        <TransactionView />
      </Layout>
    </>
  );
}
