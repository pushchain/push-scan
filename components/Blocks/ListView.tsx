import React from 'react';
import { Box, Text } from '../../blocks';
import Pagination from '../Pagination';
import BlockView from './BlockView'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Blocks = () => {
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
          <Text variant="bs-semibold" color='text-tertiary'>BLOCK HASH</Text>
          <Text variant="bs-semibold" color='text-tertiary'>VALIDATOR</Text>
          <Text variant="bs-semibold" color='text-tertiary'>TXN </Text>
          <Text variant="bs-semibold" color='text-tertiary'>SIZE (IN BYTES)</Text>
          <Text variant="bs-semibold" color='text-tertiary'>AGE</Text>
        </Box>

        {data.map((v) => <BlockView />)}

        <Pagination
          itemsPerPage={10}
          totalItems={200}
          paginate={(pageNumber) => console.log(pageNumber)}
          currentPage={1}
        />
    </Box>
  );
};

export default Blocks;