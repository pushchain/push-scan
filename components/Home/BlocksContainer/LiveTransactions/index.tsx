// React, NextJS imports
import React from 'react';

// External Library imports
import { useTheme } from 'styled-components';
import { Divider, useMediaQuery } from '@mui/material';
import { ThemeType } from '../../../../types/theme';

// Internal Components imports
import { useTheme as getTheme } from '../../../../contexts/ThemeContext';
import { Box, Text, ArrowUpRight } from '../../../../blocks';

export default function LiveTransactions() {
  const isMobile = useMediaQuery('(max-width:480px)');
  const { isDarkMode } = getTheme();

  const theme = useTheme() as ThemeType;

  const overViewData = [
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
    {
      status: "Success",
      txHash: '0556ba4acd62f....',
      from: '0556b...96e5659bf',
      to: '0556b...96e5659bf',
      age: '2s ago'
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
      >
        <Text variant='h5-semibold' color="text-primary">Live Transactions</Text>
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xxxs"
        >
          <Box
            display="flex"
            flexDirection="row"
            padding="spacing-xs"
            justifyContent="space-between"
            alignSelf="stretch"
            gap="spacing-xxl"
          >
            <Text variant='os-bold' color='text-tertiary'>STATUS</Text>
            <Text variant='os-bold' color='text-tertiary'>Tx HASH</Text>
            <Text variant='os-bold' color='text-tertiary'>FROM</Text>
            <Text variant='os-bold' color='text-tertiary'>TO</Text>
            <Text variant='os-bold' color='text-tertiary'>AGE</Text>
          </Box>
          {overViewData.map((dt) => 
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
          >
            <Box
              display="flex"
              flexDirection="row"
              padding="spacing-xs"
              justifyContent="space-between"
              alignItems="center"
              gap="spacing-xxl"
              >
              <Text variant='bs-regular' color="text-primary">{dt.status}</Text>
              <Text variant='bs-regular' color="text-primary">{dt.txHash}</Text>
              <Text variant='bs-regular' color="text-primary">{dt.from}</Text>
              <Text variant='bs-regular' color="text-primary">{dt.to}</Text>
              <Text variant='bs-regular' color="text-tertiary">{dt.age}</Text>
            </Box>
            <Divider color="#313338" flexItem orientation='horizontal' />
          </Box>
            

          )}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xxxs"
        color="text-brand-medium"
        justifyContent="flex-end"
      >
        <Text variant='bes-semibold' color="text-brand-medium">View All Transactions</Text>
        <ArrowUpRight></ArrowUpRight>
      </Box>
    </Box>
  )
}
