// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
import { BlocksLoader } from '../../components/Loader/BlocksLoader';

const BlocksView = dynamic(() => import('../../sections/Blocks'), {
  loading: () => <BlocksLoader />,
});

const Layout = dynamic(() => import('../../layout'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Push Blocks detail</title>
      </Head>
      <Layout>
        <BlocksView />
      </Layout>
    </>
  );
}
