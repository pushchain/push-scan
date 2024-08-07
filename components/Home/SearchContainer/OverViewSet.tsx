// React, NextJS imports
import React from 'react';

// External Library imports
import { useTheme } from 'styled-components';
import { Divider, useMediaQuery, useScrollTrigger } from '@mui/material';
import { Box, Text } from '../../../blocks';

// Internal Components imports
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ThemeType } from '../../../types/theme';
import { HorizontalLine } from '../../Reusables/SharedStyling';

export default function OverViewSet() {
  
  const { isDarkMode } = getTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

  const theme = useTheme() as ThemeType;

  console.log("theme : ", console.log(theme))

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap="spacing-xxxs"
      padding="spacing-sm"
      border="border-lg solid stroke-secondary"
      backgroundColor="surface-primary"
      borderRadius='radius-md'
      width="100%"
    >
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap="spacing-xxxs"
            padding="spacing-sm"
        >
            <Text variant="h6-regular" color='text-tertiary'>Transactions</Text>
            <Text variant="h3-semibold" color='text-primary'>245,487,099</Text>
        </Box>
        <Divider color="#313338" flexItem orientation='vertical'/>
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap="spacing-xxxs"
            padding="spacing-sm"
            border-left="border-sm solid stroke-secondary"
        >
            <Text variant="h6-regular" color='text-tertiary'>Total Blocks</Text>
            <Text variant="h3-semibold" color='text-primary'>16, 793, 950</Text>
        </Box>
        <Divider color="#313338" flexItem orientation='vertical'/>
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap="spacing-xxxs"
            padding="spacing-sm"
            border-left="border-sm solid stroke-secondary"
        >
            <Text variant="h6-regular" color='text-tertiary'>Daily Transactions</Text>
            <Text variant="h3-semibold" color='text-primary'>142, 098</Text>
        </Box>
    </Box>
  )
}
