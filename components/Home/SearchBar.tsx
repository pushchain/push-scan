import React, { useCallback, useEffect, useState } from 'react';
import { Box, TextInput, Search } from '../../blocks';
import { ethers } from 'ethers';
import { useDebounce } from 'react-use';
import { useRouter } from 'next/router'

export default function SearchBar() {
  const router = useRouter()

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const getFormattedQuery = useCallback((qry: string) => {
    if (!qry) return '';
    const isAddress = ethers.isAddress(qry);
    const value = isAddress ? `eip155:${qry}` : qry;
    console.log(" Search Value: ", value)

    return value;
  }, []);

  useDebounce(() => setDebouncedQuery(getFormattedQuery(query)), 500, [query]);
  
  return (
    <TextInput
      css={'width: 100%'}
      placeholder="Search by Address, Tx Hash, Block Hash"
      icon={<Search size={24} onClick={() => router.push(`/search/${debouncedQuery}`)}/>}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}



