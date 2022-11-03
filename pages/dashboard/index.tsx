import React from "react";
import Head from "next/head";
import Navbar from "layout/navbar";
import DashBoardView from "__pages__/dashboard";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>DashBoard</title>
      </Head>
      <Navbar />
      <h1>Hello</h1>
      <DashBoardView />
    </>
  );
}
