// React, NextJS imports
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Internal Components imports
const LoginView = dynamic(() => import('../../__pages__/login'));
const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));

export default function Login() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <Navbar />
      <LoginView />
      <Footer />
    </>
  );
}
