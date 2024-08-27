import React from 'react';
import { Box, Text } from '../../blocks';
import ListView from '../../components/Transactions/ListView';
import { Transaction } from '../../types/transaction';


interface dataProps {
  transactions: Transaction[],
  totalPages: number,
  lastTs: number
}

interface IProps {
  data?: dataProps,
  search?: true,
  address?: string
}

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
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      >
        <Text variant="h3-semibold" color='text-primary'>Transactions</Text>
        <ListView data={props.data} address={props.address} search={props.search} />
      </Box>
    </Box>
    
  );
};

export default Transactions;