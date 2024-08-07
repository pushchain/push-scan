// pages/transactions/details/[address].tsx
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Layout = dynamic(() => import('../../layout'));
const TransactionDetailsView = dynamic(() => import('../../sections/Transactions/address'), {
  loading: () => <p>Loading...</p>,
});

const TransactionDetailsPage = () => {
  const router = useRouter();
  const { address } = router.query; // Accessing the dynamic address parameter

  return (
    <>
      <Head>
        <title>Transaction Details for {address}</title>
      </Head>
      <Layout>
        <TransactionDetailsView address={address} />
      </Layout>
    </>
  );
};

export default TransactionDetailsPage;
