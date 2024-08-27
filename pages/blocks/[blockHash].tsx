// pages/transactions/details/[address].tsx
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Layout = dynamic(() => import('../../layout'));
const BlocksDetailsView = dynamic(() => import('../../sections/Blocks/blockHash'), {
  loading: () => <p>Loading...</p>,
});

const BlocksDetailsPage = () => {
  const router = useRouter();
  const { blockHash } = router.query;

  return (
    <>
      <Head>
        <title>Blocks Details for {blockHash}</title>
      </Head>
      <Layout>
        <BlocksDetailsView blockHash={blockHash} />
      </Layout>
    </>
  );
};

export default BlocksDetailsPage;
