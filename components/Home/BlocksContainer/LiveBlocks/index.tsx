// React, NextJS imports
import React from 'react';

// External Library imports
import { useTheme } from 'styled-components';
import { Divider, useMediaQuery } from '@mui/material';
import { ThemeType } from '../../../../types/theme';

// Internal Components imports
import { OverviewItem } from './liveblocks.styles';
import { useTheme as getTheme } from '../../../../contexts/ThemeContext';
import { Box, Text, ArrowUpRight } from '../../../../blocks';

export default function LiveBlocks() {
  const isMobile = useMediaQuery('(max-width:480px)');
  const { isDarkMode } = getTheme();

  const theme = useTheme() as ThemeType;

  const overViewData = [
    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 460,
      age: '2s ago'
    },
    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 660,
      age: '6s ago'
    },
    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 660,
      age: '9s ago'
    },
    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 605,
      age: '2m ago'
    },
    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 60,
      age: '33m ago'
    },
    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 234,
      age: '45m ago'
    },

    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 2,
      age: '48m ago'
    },
    {
      blockHash: '0556ba4acd62f....',
      validator: '0556b...96e5659bf',
      tx: 789,
      age: '52m ago'
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
        <Text variant='h5-semibold' color="text-primary">Live Blocks</Text>
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
            gap="spacing-xs"
          >
            <Text variant='os-bold' color='text-tertiary'>BLOCK HASH</Text>
            <Text variant='os-bold' color='text-tertiary'>VALIDATOR</Text>
            <Text variant='os-bold' color='text-tertiary'>TX</Text>
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
              gap="spacing-xs"
              >
              <Text variant='bs-regular' color="text-primary">{dt.blockHash}</Text>
              <Text variant='bs-regular' color="text-primary">{dt.validator}</Text>
              <Text variant='bs-regular' color="text-primary">{dt.tx}</Text>
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
        <Text variant='bes-semibold' color="text-brand-medium">View All Blocks</Text>
        <ArrowUpRight></ArrowUpRight>
      </Box>
    </Box>
  )
}
