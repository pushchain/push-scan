// React, NextJS imports
import React, { useCallback, useState } from 'react';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery, useScrollTrigger } from '@mui/material';
import { Box, Text, TextInput, Search } from '../../../blocks';

// Internal Components imports
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ThemeType } from '../../../types/theme';
import { ethers } from 'ethers';

export default function SearchBar() {
  
  const theme = useTheme() as ThemeType;
  const { isDarkMode } = getTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

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
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      gap="spacing-xs"
      width="100%"
    >
      <Text variant="h3-semibold" color='text-primary'>Push Blockchain Explorer</Text>
      
     
      <Box
        width="100%"
        border="border-lg solid stroke-primary"
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
    </Box>
  )
}



