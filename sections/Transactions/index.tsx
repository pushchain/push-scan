import React from 'react';
import { Box, Text } from '../../blocks';
import ListView from '../../components/Transactions/ListView';

const Transactions = (props) => {
  return (

    <Box
      width="100%"
      display="flex"
      flexDirection="column"
    >

      { props.address && (<Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        gap="spacing-md"
      >
        <Text variant="h3-semibold" color='text-primary'>Address {props.address}</Text>
        <Text variant="h3-semibold" color='text-primary'>Transactions for {props.address}</Text>
      </Box>)}

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
    </Box>
    
  );
};

export default Transactions;