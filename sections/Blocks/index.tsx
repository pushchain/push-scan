import React from 'react';
import { Box, Text } from '../../blocks';
import BlocksListView from '../../components/Blocks/ListView';

const Blocks = () => {
  return (
    <Box
      width="-webkit-fill-available"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="spacing-md"
    >
      <Text variant="h3-semibold" color='text-primary'>Blocks</Text>
      <BlocksListView />
    </Box>
  );
};

export default Blocks;