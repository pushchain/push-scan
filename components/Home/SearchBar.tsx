import React, { useCallback, useState } from 'react';
import { Box, TextInput, Search } from '../../blocks';
import { ethers } from 'ethers';
import { useDebounce } from 'react-use';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState({});

  const getFormattedQuery = useCallback((qry: string) => {
    if (!qry) return {};
    const isAddress = ethers.isAddress(qry);
    console.log("isAddress: ", isAddress)

    const key = isAddress ? 'wallet' : 'transaction';
    const value = isAddress ? `eip155:${qry}` : qry;
    console.log("{ [key]: value } :::::", { [key]: value })

    return { [key]: value };
  }, []);

  useDebounce(() => setDebouncedQuery(getFormattedQuery(query)), 500, [query]);

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



