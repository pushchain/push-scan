import React from "react";
import RequireAuth from "components/RequireAuth";
import AdminView from "__pages__/admin";
import Head from "next/head";
import Navbar from "layout/navbar";

export default function Admin() {
  return (
    <RequireAuth>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Navbar />
      <AdminView />
    </RequireAuth>
  );
}
