import React, { useState } from 'react';
import { Box, Text } from '../../blocks';
import Pagination from '../Pagination';
import RowView from './RowView'
import { useLiveTransactions } from '../../hooks/useLiveTransactions';
import { PerPageItems } from '../../utils/constants'

const ListView = () => {
  const [page, setPage] = useState(null);
  const { data, error, isLoading, isError } = useLiveTransactions({ lastTs: page });

  return (
    <Box
      width="-webkit-fill-available"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="spacing-xs"
    >
      <Box
        width="-webkit-fill-available"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        alignSelf="stretch"
      >
        <Text variant="bs-semibold" color='text-tertiary'>STATUS</Text>
        <Text variant="bs-semibold" color='text-tertiary'>TX HASH</Text>
        <Text variant="bs-semibold" color='text-tertiary'>BLCK HASH</Text>
        <Text display={{ ml: 'none', dp: 'block' }} variant="bs-semibold" color='text-tertiary'>FROM </Text>
        <Text display={{ ml: 'none', dp: 'block' }} variant="bs-semibold" color='text-tertiary'>TO</Text>
        <Text display={{ ml: 'none', dp: 'block' }} variant="bs-semibold" color='text-tertiary'>CATEGORY</Text>
        <Text display={{ ml: 'none', dp: 'block' }} variant="bs-semibold" color='text-tertiary'>AGE</Text>
      </Box>

      {data?.transactions.map((tx) => (
        <RowView {...tx} />
      ))}

      <Pagination
        itemsPerPage={PerPageItems}
        totalItems={data?.totalPages * PerPageItems}
        paginate={(page) => setPage(data?.lastTs)}
        currentPage={page}
      />
    </Box>
  );
};

export default ListView;