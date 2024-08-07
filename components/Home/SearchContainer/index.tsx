// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery, useScrollTrigger } from '@mui/material';
import { Box } from '../../../blocks';

// Internal Components imports
import { SearchItem } from './search.styles';
import { Text } from '../../Reusables/SharedStyling';
import { useData } from '../../../contexts/DataContext';
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ItemVV2 } from '../../Reusables/SharedStyling';
import { ThemeType } from '../../../types/theme';
import { OverviewLoader } from '../../Loader/OverviewLoader';

import SearchBar from './SearchBar'
import OverViewSet from './OverViewSet'
export default function SearchContainer() {
  
  const { isDarkMode } = getTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

  const theme = useTheme() as ThemeType;

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="spacing-xxxl"
      width="100%"
    >

      <SearchBar></SearchBar>
      <OverViewSet></OverViewSet>
    </Box>
  )
}
