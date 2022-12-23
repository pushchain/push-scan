// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid, Box, useMediaQuery } from '@mui/material';

// Internal Components imports
import { HorizontalLine, DashBoardContainer } from './dashboard.styled';
import Trending from './components/Trending';
import RecentlyAdded from './components/RecentlyAdded';
import TopChannels from './components/TopChannels';
import LineChartSet from './components/LineChartSet/LineChartSet';
import OverViewSet from './components/OverViewSet/OverViewSet';
import GovernanceSet from './components/GovernanceSet/GovernanceSet';

const DashBoardView = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <DashBoardContainer>
      <OverViewSet />
      <Grid container spacing={!isMobile ? 3 : 0} justifyContent="center">
        <Trending />
        <HorizontalLine />
        <RecentlyAdded />
        <HorizontalLine />
        <TopChannels />
      </Grid>
      <LineChartSet />
      <GovernanceSet />
    </DashBoardContainer>
  );
};

export default DashBoardView;
