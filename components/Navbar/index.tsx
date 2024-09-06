// React, NextJS imports
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// External Library imports
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';

// Internal Components imports
import { useTheme as Theme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { ROUTES, CREDENTIALKEYS } from '../../utils/constants';
import { ThemeType } from '../../types/theme';
import { Box, Text, Lozenge, PushLogo } from '../../blocks';
import SearchBar from '../Home/SearchBar'
import ChainsDropDown from '../Reusables/ChainsDropDown'
import Link from 'next/link'

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
    <>
      <Box
        width="100%"
        alignItems="center"
        display={{ ml: "none", dp: "flex" }}
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
            gap="spacing-xxxs"
          >
            <PushLogo height={36} width={36}/>
            <Text variant='h4-regular' color="text-primary">PushScan</Text>

            <Lozenge 
              size="small"
              variant="primary" 
              css={css`padding: 10px; margin-left: 10px;`}
            >ALPHA</Lozenge>
          </Box>

          <ChainsDropDown />
          
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-sm"
        > 
          { asPath !== '/dashboard' && (
            <Link href="/dashboard">
              <Text variant="bs-regular">Analytics</Text>
            </Link>
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

      <Box
        alignItems="center"
        display={{ ml: "flex", dp: "none" }}
        flexDirection="column"
        gap="spacing-xs"
      >
        <Box
          width="100%"
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
            <PushLogo height={24} width={24}/>
            <Text variant='h4-regular' color="text-primary">PushScan</Text>

            <Lozenge 
              size="small"
              variant="primary" 
              css={css`padding: 10px; margin-left: 10px;`}
            >ALPHA</Lozenge>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="spacing-sm"
          > 
            { asPath !== '/dashboard' && (
              <Link href="/dashboard">
                <Text variant="bs-regular">Analytics</Text>
              </Link>
            )}

            <DarkModeSwitch
              checked={isDarkMode}
              onChange={darkModeToggle}
              size={28}
              sunColor="#575D73"
              moonColor="#FFFFFF"
            />
          </Box>
        </Box>

        <ChainsDropDown />

        { asPath !== '/home' && <SearchBar /> }
      </Box>
    </>
    
  );
}
