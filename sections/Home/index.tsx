// React, NextJS imports
import React from 'react';
// External Library imports
import { useMediaQuery } from '@mui/material';
import SearchContainer from '../../components/Home/SearchContainer';
import BlocksContainer from '../../components/Home/BlocksContainer';
import { Box } from '../../blocks';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <Box
      width="100%"
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="spacing-xxxl"
      padding="spacing-xxxl"
    >
      <SearchContainer />
      <BlocksContainer />
    </Box>
  );
};

export default Home;