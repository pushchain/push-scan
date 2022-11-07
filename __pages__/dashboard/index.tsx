import { Grid, Typography } from "@mui/material";
import ReactECharts from "echarts-for-react";
import { DashBoardContainer } from "./dashboard.styled";
import Topchannels from "./components/TopChannels";
import NewChannels from "./components/NewChannels";
import Channels from "./components/Channels";

const DashBoardView = () => {
  return (
    <DashBoardContainer>
      <Typography variant="h3">Push Analytics Dashboard</Typography>
      <Typography variant="h3" my={3}>
        LeaderBoard
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Topchannels />
        <NewChannels />
      </Grid>
      <Grid container spacing={3} justifyContent="center" mt={5}>
        <Channels />
      </Grid>
    </DashBoardContainer>
  );
};

export default DashBoardView;
