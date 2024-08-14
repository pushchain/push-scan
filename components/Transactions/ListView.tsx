import React from 'react';
import { Box, Text } from '../../blocks';
import Pagination from '../Pagination';
import RowView from './RowView'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const ListView = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="spacing-xs"
    >
      <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      alignSelf="stretch"
      >
      <Text variant="bs-semibold" color='text-tertiary'>STATUS</Text>
      <Text variant="bs-semibold" color='text-tertiary'>TX HASH</Text>
      <Text variant="bs-semibold" color='text-tertiary'>BLCK HASH</Text>
      <Text variant="bs-semibold" color='text-tertiary'>FROM </Text>
      <Text variant="bs-semibold" color='text-tertiary'>TO</Text>
      <Text variant="bs-semibold" color='text-tertiary'>CATEGORY</Text>
      <Text variant="bs-semibold" color='text-tertiary'>AGE</Text>

      </Box>

      {data.map((v) => (
        <RowView />
      ))}

      <Pagination
        itemsPerPage={10}
        totalItems={100}
        paginate={(pageNumber) => console.log(pageNumber)}
        currentPage={1}
      />
    </Box>
  );
};

export default ListView;