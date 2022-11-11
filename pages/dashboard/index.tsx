import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Validate from "components/RequireAuth";
import DashBoardView from "__pages__/dashboard";
import { Grid } from "@mui/material";
import Footer from "components/Footer";

export default function Dashboard() {
  return (
    <Validate>
      <Head>
        <title>Push Analytics DashBoard</title>
      </Head>
      <Grid>
        <Navbar />
        <DashBoardView />
        <Footer />
      </Grid>
    </Validate>
  );
}
