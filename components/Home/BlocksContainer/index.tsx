// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery, useScrollTrigger } from '@mui/material';

// Internal Components imports
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ThemeType } from '../../../types/theme';
import { Box } from '../../../blocks';
import LiveBlocks from './LiveBlocks'
import LiveTransactions from './LiveTransactions'

export default function BlocksContainer() {
  const { isDarkMode } = getTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

  const theme = useTheme() as ThemeType;

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap="spacing-sm"
    >
      <LiveBlocks></LiveBlocks>
      <LiveTransactions></LiveTransactions>
    </Box>
  );
}
