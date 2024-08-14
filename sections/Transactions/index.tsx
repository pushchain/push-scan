import React from 'react';
import { Box, Text } from '../../blocks';
import ListView from '../../components/Transactions/ListView';

const Transactions = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="spacing-md"
    >
      <Text variant="h3-semibold" color='text-primary'>Transactions</Text>
      <ListView />
    </Box>
  );
};

export default Transactions;