import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useRouter } from 'next/router';
import { Box, Button, useMediaQuery } from '@mui/material';
import Logo from 'components/Logo';
import { useTheme } from 'styled-components';
import { useTheme as Theme } from 'contexts/ThemeContext';
import { useData } from 'contexts/DataContext';
import { ROUTES, CREDENTIALKEYS } from 'utils/constants';
import { RootStyle, ToolbarStyle } from './navbar.styled';
import { Text } from '__pages__/dashboard/dashboard.styled';
import { ItemHV2, ItemVV2 } from 'theme/SharedStyling';

export default function Navbar() {
  const { isDarkMode, darkModeToggle } = Theme();
  const { isLoggedIn, setIsLoggedIn, token } = useData();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:480px)');
  const { asPath, pathname } = useRouter();

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.setItem(CREDENTIALKEYS.LOGINCHECK, '' + false);
    sessionStorage.setItem(CREDENTIALKEYS.TOKEN, '');
    router.push(ROUTES.LOGIN);
  };

  return (
    <ItemHV2
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="0px 50px"
      height="100px"
      position="static"
    >
      <ItemHV2 alignItems="center" justifyContent="flex-start" width="50%">
        <Logo
          src="./static/push-icon.svg"
          sx={{
            width: isMobile ? 38 : 65,
            height: isMobile ? 39 : 66,
            margin: '33px 10px 33px 0px',
          }}
        />
        <ItemVV2 alignItems="start" justifyContent="center">
          <Text size={isMobile ? '24px' : '32px'} weight="500">
            Push Snapshots
          </Text>
          {!isMobile && (
            <Text size="15px" color={theme.default.secondaryColor}>
              Explore trends, activity and track growth on the Push Network
            </Text>
          )}
        </ItemVV2>
      </ItemHV2>

      <ItemHV2 justifyContent="flex-end" alignItems="center" width="50%">
        {asPath !== '/dashboard' && (
          <>
            <Button
              variant="outlined"
              style={{
                marginRight: '5px',
                color: theme.default.color,
                border: `1px solid ${theme.default.border}`,
              }}
              onClick={() => {
                router.push(ROUTES.DASHBOARD);
              }}
            >
              Dashboard
            </Button>
            <Button
              variant="outlined"
              style={{
                marginRight: '5px',
                color: theme.default.color,
                border: `1px solid ${theme.default.border}`,
              }}
              onClick={() => router.push(ROUTES.ADMIN)}
            >
              Admin Panel
            </Button>
            {isLoggedIn ? (
              <Button
                variant="outlined"
                style={{
                  marginRight: '5px',
                  color: theme.default.color,
                  border: `1px solid ${theme.default.border}`,
                }}
                onClick={() => logout()}
              >
                Logout
              </Button>
            ) : null}
          </>
        )}
        <Box
          sx={{
            border: '1px solid #BAC4D6',
            backgroundColor: isDarkMode ? '#282A2E' : 'transparent',
            borderRadius: '50%',
            height: '50px',
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={darkModeToggle}
            size={28}
            sunColor="#575D73"
            moonColor="#FFFFFF"
          />
        </Box>
      </ItemHV2>
    </ItemHV2>
  );
}
