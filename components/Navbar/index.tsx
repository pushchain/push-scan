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
import { Box, Text, Lozenge, MoonFilled, PushLogo } from '../../blocks';
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
    <Box
      display="flex"
      flexDirection="column"
      gap={{initial: "spacing-lg", ml: "spacing-sm" }}
      margin={{initial: "spacing-sm spacing-xxxxxl spacing-sm spacing-xxxxxl", ml: "spacing-sm" }}
    >
      <Box
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
            gap="spacing-xxxs"
            css={'cursor: pointer'}
            onClick={() => router.push('/home')}
          >
            <PushLogo height={36} width={36}/>
            <Text variant='h4-regular' color="text-primary">PushScan</Text>

            <Lozenge 
              size="small"
              variant="primary" 
              css={css`padding: 10px; margin-left: 10px;`}
            >ALPHA</Lozenge>
          </Box>          
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-sm"
        > 
          { asPath !== '/dashboard' && (
            <Link href="/dashboard">
              <Text variant="h6-semibold" color='text-primary'>Analytics</Text>
            </Link>
          )}

          <MoonFilled onClick={darkModeToggle} size={24} color='icon-primary'/>

          { asPath !== '/home' && (
            <Box
              display={{ ml: 'none', dp: 'flex' }}
              minWidth="330px"
            >
              <SearchBar /> 
            </Box>
          )}
        </Box>
      </Box>

      <Box
        display={{ dp: "none", ml: "flex" }}
        flexDirection="column"
        gap="spacing-xs"
        width="-webkit-fill-available"
      >
        { asPath === '/home' && <Text variant="h3-semibold" color='text-primary'>Push Blockchain Explorer</Text> }
        <SearchBar />
      </Box>
    </Box>
  );
}
