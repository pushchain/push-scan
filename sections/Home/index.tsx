// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid, useMediaQuery } from '@mui/material';

// Internal Components imports
import {
  HomeContainer
} from '../../components/Reusables/SharedStyling';
import Search from '../../components/Home/Search';
import LiveBlocks from '../../components/Home/LiveBlocks';
import LiveTransactions from '../../components/Home/LiveTransactions';
import OverViewSet from '../../components/Home/OverViewSet';

import { Box, Skeleton, Text } from '../../blocks';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <HomeContainer>
      <Search />
      <OverViewSet />
      <Box
        margin='spacing-xxxl spacing-none'
        display="flex"
        alignSelf='stretch'
        flexDirection="row"
        gap="spacing-xxxl"
      >
        <LiveBlocks />
        <LiveTransactions />
      </Box>
    </HomeContainer>
  );
};

export default Home;