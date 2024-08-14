// React, NextJS imports
import React from 'react';
import { Divider } from '@mui/material';

// Internal Components imports
import { Box, Text, Front } from '../../blocks';

export default function LiveTransactions() {
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
            padding="spacing-xs spacing-none"
            justifyContent="space-between"
            alignSelf="stretch"
            gap="spacing-xs"
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
              padding="spacing-xs spacing-none"
              justifyContent="space-between"
              alignItems="center"
              gap="spacing-xs"
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
        <Front />
      </Box>
    </Box>
  )
}
