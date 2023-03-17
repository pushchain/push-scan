// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
const RequiresAuth = dynamic(() => import('../../components/RequireAuth'));
const AdminView = dynamic(() => import('../../__pages__/admin'));
const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));

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
