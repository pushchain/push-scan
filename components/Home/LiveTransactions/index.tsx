// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery, useScrollTrigger } from '@mui/material';

// Internal Components imports
import { OverviewItem } from './livetransactions.styles';
import { Text } from '../../Reusables/SharedStyling';
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ItemHV2, ItemVV2 } from '../../Reusables/SharedStyling';
import { ThemeType } from '../../../types/theme';
import { OverviewLoader } from '../../Loader/OverviewLoader';

export default function LiveBlocks() {
  const isMobile = useMediaQuery('(max-width:480px)');
  const { isDarkMode } = getTheme();

  const theme = useTheme() as ThemeType;

  const overViewData = [
    {
      title: 'Push Integrations',
      value: 534,
      size: 60,
    },
    {
      title: 'Chats Sent',
      value: 44,
      size: 51,
    },
    {
      title: 'Notifications Sent',
      value: 333,
      size: 41,
    },
    {
        title: 'Notifications Sent',
        value: 333,
        size: 41,
      },
      {
        title: 'Notifications Sent',
        value: 333,
        size: 41,
      },
      {
        title: 'Notifications Sent',
        value: 333,
        size: 41,
      },

      {
        title: 'Notifications Sent',
        value: 333,
        size: 41,
      },
      {
        title: 'Notifications Sent',
        value: 333,
        size: 41,
      },
  ];

  return (
    <ItemVV2
      width="100%"
      alignItems="flex-start"
      gap='20px'
    >
     <Text size="18px" weight={400} marginBottom="20px">
        Live Transactions
      </Text>

      <ItemHV2 justifyContent="space-start">
        <Text>STATUS</Text>
        <Text>TX HASH</Text>
        <Text>FROM</Text>
        <Text>TO</Text>
        <Text>AGE</Text>
      </ItemHV2>
      {overViewData.map((data, index) => (
        <ItemHV2 justifyContent="space-start" key={index}>
            <Text>SUCCESS</Text>
            <Text>0xw34..5h33</Text>
            <Text>0xd324..45h54</Text>
            <Text>0xd32..h54</Text>
            <Text>2s ago</Text>
        </ItemHV2>
      ))}
    </ItemVV2>
  )
}
