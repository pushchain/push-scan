// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery, useScrollTrigger } from '@mui/material';

// Internal Components imports
import { SearchItem } from './search.styles';
import { Text } from '../../Reusables/SharedStyling';
import { useData } from '../../../contexts/DataContext';
import { useTheme as getTheme } from '../../../contexts/ThemeContext';
import { ItemVV2 } from '../../Reusables/SharedStyling';
import { ThemeType } from '../../../types/theme';
import { OverviewLoader } from '../../Loader/OverviewLoader';

export default function Search() {
  const {
    pushIntegrations,
    setChatSent,
    setChatUsers,
    setNotificationsSent,
    chatSent,
    notifiactionsSent,
    overViewLoading,
    setOverviewLoading,
  } = useData();
  const { isDarkMode } = getTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

  const theme = useTheme() as ThemeType;

  return (
    <ItemVV2
      width="100%"
      margin={isMobile ? '25px 0px 30px' : '50px 0px 30px'}
      alignItems="flex-start"
    >
      <Text size="26px" weight={318} marginBottom="12px">
        Push Blockchain Explorer
      </Text>

      {/* <SearchContainer>
        <Search>
          <SearchInputContainer>
            <SearchInput
              onChange={(e) => {
                if (timeOutRef.current) clearTimeout(timeOutRef.current);
                timeOutRef.current = setTimeout(() => {
                  setSearchInputValue(e.target.value);
                }, 500);
              }}
              type="text"
              placeholder="Search..."
            />
          </SearchInputContainer>
        </Search>
      </SearchContainer> */}
      
    </ItemVV2>
  );
}
