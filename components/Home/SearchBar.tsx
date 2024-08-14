import React, { useCallback, useState } from 'react';
import { Box, TextInput, Search } from '../../blocks';
import { ethers } from 'ethers';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState({});

  const getFormattedQuery = useCallback((qry: string) => {
    if (!qry) return {};
    const isAddress = ethers.isAddress(qry);
    const key = isAddress ? 'wallet' : 'twitter';
    const value = isAddress ? `eip155:${qry}` : qry;
    return { [key]: value };
  }, []);

  return (
      <Box
        width="100%"
        borderRadius='radius-xs'
        backgroundColor="components-inputs-background-default"
      >
        <TextInput
          placeholder="Search by Address"
          icon={<Search />}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
  )
}



