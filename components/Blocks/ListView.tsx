import React, { useState } from 'react';
import { Box, Text } from '../../blocks';
import Pagination from '../Pagination';
import BlockView from './BlockView'
import { useLiveBlocks } from '../../hooks/useBlocks';
import { PerPageItems } from '../../utils/constants'

const Blocks = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError } = useLiveBlocks();    

  return (
    <Box
        width="-webkit-fill-available"
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
          <Text display={{ ml: 'none', dp: 'block' }} variant="bs-semibold" color='text-tertiary'>TXN </Text>
          <Text display={{ ml: 'none', dp: 'block' }} variant="bs-semibold" color='text-tertiary'>SIZE (IN BYTES)</Text>
          <Text display={{ ml: 'none', dp: 'block' }} variant="bs-semibold" color='text-tertiary'>AGE</Text>
        </Box>

        {data?.blocks?.map((block) => <BlockView block={block}/>)}

        <Pagination
          itemsPerPage={PerPageItems}
          totalItems={data?.totalPages * PerPageItems}
          paginate={(page) => setPage(page)}
          currentPage={page}
        />
    </Box>
  );
};

export default Blocks;