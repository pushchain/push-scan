import * as React from "react";
import { Grid, Box } from "@mui/material";
import { DashBoardContainer } from "./dashboard.styled";
import Topchannels from "./components/TopChannels";
import NewChannels from "./components/NewChannels";
import LineChartSet from "./components/LineChartSet/LineChartSet";
import OverViewSet from "./components/OverViewSet/OverViewSet";
import GovernanceSet from "./components/GovernanceSet/GovernanceSet";

const DashBoardView = () => {
  return (
    <DashBoardContainer>
      <Grid container spacing={4} justifyContent="center">
        <Topchannels />
        <NewChannels />
        <NewChannels />
      </Grid>
      <LineChartSet />
      <OverViewSet />
      <GovernanceSet />
    </DashBoardContainer>
  );
};

export default DashBoardView;
