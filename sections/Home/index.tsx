import React from 'react';
import { Box, Text } from '../../blocks';
import SearchBar from '../../components/Home/SearchBar'
import OverView from '../../components/Home/OverView'
import LiveBlocks from '../../components/Home/LiveBlocks'
import LiveTransactions from '../../components/Home/LiveTransactions'

const Home = () => {
  return (
    <Box
      width="100%"
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="spacing-xxxl"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="spacing-xxxl"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          width="100%"
        >
          <Text variant="h3-semibold" color='text-primary'>Push Blockchain Explorer</Text>
          <SearchBar />
        </Box>
        
        <OverView />
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="spacing-sm"
      >
        <LiveBlocks />
        <LiveTransactions />
      </Box>
    </Box>
  );
};

export default Home;