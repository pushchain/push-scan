import React from 'react';
import { Box, Text } from '../../blocks';
import SearchBar from '../../components/Home/SearchBar'
import OverView from '../../components/Home/OverView'
import LiveBlocks from '../../components/Home/LiveBlocks'
import LiveTransactions from '../../components/Home/LiveTransactions'

const Home = () => {
  return (
    <Box
      width="-webkit-fill-available"
      display="flex"
      flexDirection="column"
      gap="spacing-xxxl"
      
      >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={{ ml: "spacing-lg", initial: "spacing-xxxl" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          width="-webkit-fill-available"
        >
          <Text variant="h3-semibold" color='text-primary'>Push Blockchain Explorer</Text>
          <SearchBar />
        </Box>
        
        <OverView />
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection={{ initial: "row", ml: "column" }}
        gap={{ initial: "spacing-xxxl", ml: "spacing-xxl" }}
        justifyContent="space-between"
      >
        <LiveBlocks />
        <LiveTransactions />
      </Box>
    </Box>
  );
};

export default Home;