// pages/transactions/details/[address].tsx
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Layout = dynamic(() => import('../../layout'));
const TransactionDetailsView = dynamic(() => import('../../sections/Transactions/txHash'), {
  loading: () => <p>Loading...</p>,
});

const TransactionDetailsPage = () => {
  const router = useRouter();
  const { txHash } = router.query; // Accessing the dynamic address parameter
  
  return (
    <>
      <Head>
        <title>Transaction Details for {txHash}</title>
      </Head>
      <Layout>
        <TransactionDetailsView txHash={txHash} />
      </Layout>
    </>
  );
};

export default TransactionDetailsPage;
