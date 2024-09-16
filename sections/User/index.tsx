import React, { useState } from 'react';
import { Box, Text, Copy, Tooltip, Spinner, Pagination } from '../../blocks';
import ListView from '../../components/Transactions/ListView';
import { centerMaskString, convertCaipToObject } from '../../utils/helpers';
import { useGetTransactionsByUser } from '../../hooks/useGetTransactionsByUser'
import { useRouter } from 'next/router';
import { PerPageItems } from '../../utils/constants'
import BlockiesSvg from 'blockies-react-svg';

const Search = () => {
  const router = useRouter();
  let { address } = router.query;

  const [tooltipText, setToolTipText] = useState('Copy Address');
  const [page, setPage] = useState(1);
  
  address = Array.isArray(address) ? address[0] : address

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setToolTipText('Copied');
    }
    setTimeout(() => {
      setToolTipText('Copy Address');
    }, 1000);
  };

  const { data, isLoading } = useGetTransactionsByUser({ address, page: page })
  
  const showLoading = !address || isLoading
  
  
  if (showLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <Spinner size='extraLarge'/>
      </Box>
    )
  }

  console.log("::::: Address: ", address)

  address = address && convertCaipToObject(address).result.address
  
  if (!address) {
    return null
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
          gap="spacing-md"
          alignItems="center"
        >
          <Text variant="h3-semibold" color='text-primary'>Address</Text>

          <Box
            display="flex"
            flexDirection="row"
            gap="spacing-xxs"
            alignItems="center"
          >
            <Box
              width="32px"
              height="32px"
              borderRadius="radius-xl"
              overflow="hidden"
            >
              <BlockiesSvg
                address={address}
                size={8}
                scale={4}
              />
            </Box>
            <Text variant="h3-semibold" color='text-primary'>{address}</Text>
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
        </Box>
        <Text variant="h3-semibold" color='text-primary'>Transactions for {centerMaskString(address)}</Text>
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