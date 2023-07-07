// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
const LoginView = dynamic(() => import('../../sections/Login'));
const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));
const Layout = dynamic(() => import('../../layout'));

export default function Login() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <Layout>
        <LoginView />
      </Layout>
    </>
  );
}
