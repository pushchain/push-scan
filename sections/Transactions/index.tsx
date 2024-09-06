import React, { useState } from 'react';
import { Box, Text, Spinner, Pagination } from '../../blocks';
import ListView from '../../components/Transactions/ListView';
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import { PerPageItems } from '../../utils/constants'

const Transactions = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useLiveTransactions({ page });
    
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <Spinner size='extraLarge'/>
      </Box>
    )
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap="spacing-md"
    > 
      <Text variant="h3-semibold" color='text-primary'>Transactions</Text>
      <ListView data={data} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Pagination
          pageSize={PerPageItems}
          current={page}
          total={data?.totalPages * PerPageItems}
          onChange={(page) => setPage(page)}
        />
      </Box>
    </Box>
  );
};

export default Transactions;