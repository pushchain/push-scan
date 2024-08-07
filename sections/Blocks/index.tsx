// React, NextJS imports
import React from 'react';
// External Library imports
import { Divider, useMediaQuery } from '@mui/material';
import { Box, Text } from '../../blocks';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Blocks = () => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="spacing-md"
      padding="spacing-xxxl"
    >
      <Text variant="h3-semibold" color='text-primary'>Blocks</Text>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-xs"
        padding="spacing-md"
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

      {data.map((v) => (
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          alignSelf="stretch"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text variant="bs-regular" color='text-primary'>0x2d2269ft...</Text>
            <Text variant="bs-regular" color='text-primary'>0x2dw...408df</Text>
            <Text variant="bs-regular" color='text-primary'>824</Text>
            <Text variant="bs-regular" color='text-primary'>4,565,456</Text>
            <Text variant="bs-regular" color='text-tertiary'>2s ago</Text>
          </Box>
          <Divider color="#313338" flexItem orientation='horizontal' />
        </Box>
      ))}
      </Box>
    </Box>
  );
};

export default Blocks;