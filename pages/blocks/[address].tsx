// pages/transactions/details/[address].tsx
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Layout = dynamic(() => import('../../layout'));
const BlocksDetailsView = dynamic(() => import('../../sections/Blocks/address'), {
  loading: () => <p>Loading...</p>,
});

const BlocksDetailsPage = () => {
  const router = useRouter();
  const { address } = router.query; // Accessing the dynamic address parameter

  return (
    <>
      <Head>
        <title>Blocks Details for {address}</title>
      </Head>
      <Layout>
        <BlocksDetailsView address={address} />
      </Layout>
    </>
  );
};

export default BlocksDetailsPage;
