// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery, useScrollTrigger } from '@mui/material';

// Internal Components imports
import { OverviewItem } from './overview.styles';
import { Text } from '../../Reusables/SharedStyling';
import { useData } from '../../../contexts/DataContext';
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ItemHV2, ItemVV2 } from '../../Reusables/SharedStyling';
import { ThemeType } from '../../../types/theme';
import { OverviewLoader } from '../../Loader/OverviewLoader';

export default function OverViewSet() {
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
  ];

  return (
    <ItemVV2
      width="100%"
      margin={isMobile ? '25px 0px 30px' : '50px 0px 30px'}
      alignItems="flex-start"
    >
      <ItemHV2
        width="100%"
        gap="23px"
        justifyContent="space-between"
        marginTop="20px"
      >
        {overViewData.map((data, index) => (
          <OverviewItem
            key={data.title}
            padding='25px 30px 22px 40px'
            style={{
              backgroundColor: theme.background.card,
              border: `1px solid ${theme.background.border}`,
              height: '114px',
            }}
          >
          </OverviewItem>
        ))}
      </ItemHV2>
    </ItemVV2>
  )
}
