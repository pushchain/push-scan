import { Grid, Typography } from "@mui/material";
import React from "react";
import { AdminContainer } from "./admin.styled";
import ApplicationStatistics from "./components/ApplicationStatistics";

export default function AdminView() {
  return (
    <AdminContainer maxWidth="xl">
      <Typography variant="h3" sx={{ m5: 5, mb: 10, textAlign: "center" }}>
        Push Protocol Admin dashboard
      </Typography>
      <Grid container spacing={2}>
        <ApplicationStatistics />
        <ApplicationStatistics />
        <ApplicationStatistics />
      </Grid>
    </AdminContainer>
  );
}
