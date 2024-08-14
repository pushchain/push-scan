import React from 'react';
import { Divider } from '@mui/material';
import { Box, Text, Add, CaretLeft, CaretRight, BellRingFilled, BellSimple, InboxBell, InboxBellFilled, Ethereum } from '../../blocks';

const TransactionRowView = () => {
  return (
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
      <Text variant="bs-regular" color='text-primary'>Success</Text>
      <Text variant="bs-regular" color='text-primary'>0x2d2269ft...</Text>
      <Text variant="bs-regular" color='text-primary'>0x2d226953...</Text>
      
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="spacing-xxs"
      >
        <Ethereum height={14} width={14} />
        <Text variant="bs-regular" color='text-primary'>0x2dw...408df</Text>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="spacing-xxs"
      >
        <InboxBellFilled />
        <Text variant="bs-regular" color='text-primary'>0x2dr...508df</Text>
      </Box>

      <Text variant="bs-regular" color='text-primary'>Notification</Text>
      <Text variant="bs-regular" color='text-tertiary'>2s ago</Text>
    </Box>
    <Divider color="#313338" flexItem orientation='horizontal' />
  </Box>
  );
};

export default TransactionRowView;