import * as React from 'react';
import { Grid, Box } from '@mui/material';
import { DashBoardContainer } from './dashboard.styled';
import Trending from './components/Trending';
import RecentlyAdded from './components/RecentlyAdded';
import TopChannels from './components/TopChannels';
import LineChartSet from './components/LineChartSet/LineChartSet';
import OverViewSet from './components/OverViewSet/OverViewSet';
import GovernanceSet from './components/GovernanceSet/GovernanceSet';

const DashBoardView = () => {
  return (
    <DashBoardContainer maxWidth="xl">
      <Grid container spacing={4} justifyContent="center">
        <Trending />
        <RecentlyAdded />
        <TopChannels />
      </Grid>
      <LineChartSet />
      <OverViewSet />
      <GovernanceSet />
    </DashBoardContainer>
  );
};

export default DashBoardView;
