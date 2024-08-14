import React from 'react';
import { Divider, useMediaQuery } from '@mui/material';
import { Box, Text } from '../../blocks';

export default function OverView() {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
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
