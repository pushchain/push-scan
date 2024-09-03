import React, { useState } from 'react';
import { Box, Text, Copy, Tooltip, Spinner, Pagination } from '../../blocks';
import ListView from '../../components/Transactions/ListView';
import { centerMaskString } from '../../utils/helpers';
import { useSearchByAddress } from '../../hooks/useSearchByAddress'
import { useRouter } from 'next/router';
import { PerPageItems } from '../../utils/constants'

const Search = () => {
  const router = useRouter();
  const { txHash } = router.query;

  const [tooltipText, setToolTipText] = useState('Copy Address');
  const [page, setPage] = useState(1);
  
  const copyAddress = () => {
    if (txHash) {
      navigator.clipboard.writeText(Array.isArray(txHash) ? txHash[0] : txHash);
      setToolTipText('Copied');
    }
    setTimeout(() => {
      setToolTipText('Copy Address');
    }, 1000);
  };

  const { data, isLoading } = useSearchByAddress({ address: txHash, page: page })
  
  const showLoading = !txHash || isLoading
  
  if (showLoading) {
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
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        gap="spacing-md"
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-xxs"
          alignItems="center"
        >
          <Text variant="h3-semibold" color='text-primary'>Address {txHash}</Text>
          <Tooltip title={tooltipText}>
            <Box cursor="pointer">
                <Copy
                  onClick={copyAddress}
                  autoSize
                  size={24}
                  color="icon-tertiary"
                />
            </Box>
          </Tooltip>
        </Box>

        <Text variant="h3-semibold" color='text-primary'>Transactions for {centerMaskString(txHash)}</Text>
      </Box>
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

export default Search;