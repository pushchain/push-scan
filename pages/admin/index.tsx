import React from 'react';
import Head from 'next/head';
import RequiresAuth from '../../components/RequireAuth';
import AdminView from '../../__pages__/admin';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Admin() {
  return (
    <RequiresAuth>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Navbar />
      <AdminView />
      <Footer />
    </RequiresAuth>
  );
}
