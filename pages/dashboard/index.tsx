import React from "react";
import Head from "next/head";
import Navbar from "layout/navbar";
import RequireAuth from "components/RequireAuth";
import DashBoardView from "__pages__/dashboard";
import { Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <RequireAuth>
      <Head>
        <title>Push Analytics DashBoard</title>
      </Head>
      <Grid>
        <Navbar />
        <DashBoardView />
      </Grid>
    </RequireAuth>
  );
}
