import React from "react";
import Head from "next/head";
import Navbar from "layout/navbar";
import Validate from "components/RequireAuth";
import DashBoardView from "__pages__/dashboard";
import { Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <Validate>
      <Head>
        <title>Push Analytics DashBoard</title>
      </Head>
      <Grid>
        <Navbar />
        <DashBoardView />
      </Grid>
    </Validate>
  );
}
