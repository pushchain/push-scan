// React, NextJS imports
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// External Library imports
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';

// Internal Components imports
import Logo from '../Logo';
import { useTheme as Theme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { ROUTES, CREDENTIALKEYS } from '../../utils/constants';
import { ItemHV2, ItemVV2 } from '../../components/Reusables/SharedStyling';
import { NavBarButtons } from './NavBarButtons';
import {
  NavbarContainer,
  HamburgerLine,
  SidebarContainer,
} from './navbar.styled';
import { ThemeType } from '../../types/theme';
import { Box, Select, Text } from '../../blocks';
import SearchBar from '../Home/SearchBar'
import ChainsDropDown from '../Reusables/ChainsDropDown'

export default function Navbar() {
  const { isDarkMode, darkModeToggle } = Theme();
  const { isLoggedIn, setIsLoggedIn, token } = useData();
  const router = useRouter();
  const theme = useTheme() as ThemeType;
  const isMobile = useMediaQuery('(max-width:480px)');
  const isSmall = useMediaQuery('(max-width:1024px)');
  const { asPath } = useRouter();
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

  const logout = () => {
    setIsLoggedIn?.(false);
    sessionStorage.setItem(CREDENTIALKEYS.LOGINCHECK, '' + false);
    sessionStorage.setItem(CREDENTIALKEYS.TOKEN, '');
    router.push(ROUTES.LOGIN);
  };

  return (
    <Box
      width="100%"
      alignItems="center"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="spacing-xs"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Logo
            src="./static/push-icon-v1.svg"
            sx={{
              width: isMobile ? 38 : 54,
              height: isMobile ? 39 : 56,
              margin: isMobile ? '33px 10px 33px 0px' : '39px 10px 33px 0px',
            }}
          />
          <Text variant='h4-regular' color="text-primary">PushScan</Text>
        </Box>  

        <Box
          backgroundColor="surface-brand-subtle"
          borderRadius='radius-xxs'
          padding="spacing-xxxs spacing-xs"
        >
          <Text variant='os-bold' color='text-brand-bold'>ALPHA</Text>
        </Box>

        <ChainsDropDown />
        
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="spacing-sm"
      > 
      { asPath !== '/home' && (
          <Text
            variant="bs-regular"
            onClick={() => {
              router.push(ROUTES.HOME);
            }}
          >
            Home
          </Text>
        )}

        { asPath !== '/dashboard' && (
          <Text
            variant="bs-regular"
            onClick={() => {
              router.push(ROUTES.DASHBOARD);
            }}
          >
            Analytics
          </Text>
        )}

        <DarkModeSwitch
          checked={isDarkMode}
          onChange={darkModeToggle}
          size={28}
          sunColor="#575D73"
          moonColor="#FFFFFF"
        />

        { asPath !== '/home' && <SearchBar /> }
      </Box>
    </Box>
  );
}
