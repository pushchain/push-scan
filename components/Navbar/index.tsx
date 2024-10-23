// React, NextJS imports
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// External Library imports
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useMediaQuery } from '@mui/material';
import { css, useTheme } from 'styled-components';

// Internal Components imports
import { useTheme as Theme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { ROUTES, CREDENTIALKEYS } from '../../utils/constants';
import { ThemeType } from '../../types/theme';
import { Box, Text, Lozenge, PushLogo } from '../../blocks';
import SearchBar from '../Home/SearchBar';

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
      justifyContent="space-between"
      alignItems="center"
      alignSelf="stretch"
      padding="spacing-sm spacing-none"
      maxWidth="1100px"
      width="calc(100% - (var(--spacing-sm) * 2))"
      css={css`
        flex: initial;
        margin: 0 auto;
      `}
      gap="spacing-xs"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
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
            cursor="pointer"
            onClick={() => router.push('/home')}
          >
            <PushLogo height={43} width={43} />
            <Text variant="h4-regular" color="text-primary">
              PushScan
            </Text>

            <Lozenge
              size="small"
              variant="primary"
              css={css`
                padding: 10px;
                margin-left: 10px;
              `}
            >
              ALPHA
            </Lozenge>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-sm"
        >
          {asPath !== '/dashboard' && (
            <Link href="/dashboard">
              <Text variant="h6-semibold" color="text-primary">
                Analytics
              </Text>
            </Link>
          )}

          <DarkModeSwitch
            style={{ margin: '0 1rem' }}
            checked={isDarkMode}
            onChange={darkModeToggle}
            size={28}
            sunColor="#494D5F"
            moonColor="#787E99"
          />

          {asPath !== '/home' && (
            <Box display={{ initial: 'flex', ml: 'none' }} minWidth="330px">
              <SearchBar />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        display={{ initial: 'none', ml: 'flex' }}
        flexDirection="column"
        gap="spacing-xs"
        width="-webkit-fill-available"
      >
        {asPath === '/home' && (
          <Text variant="h3-semibold" color="text-primary">
            Push Blockchain Explorer
          </Text>
        )}
        <SearchBar />
      </Box>
    </Box>
  );
}
