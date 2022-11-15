import { Box, Button, useMediaQuery } from '@mui/material';
import Logo from 'components/Logo';
import { useTheme } from '@mui/material/styles';
import { useTheme as Theme } from 'contexts/ThemeContext';
import { useData } from 'contexts/DataContext';
import { useRouter } from 'next/router';
import { ROUTES, CREDENTIALKEYS } from 'utils/constants';
import {
  getSubscribers,
  getNotifications,
  getLeaderBoard,
  getChannels,
} from 'utils/api';
import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { RootStyle, ToolbarStyle } from './navbar.styled';
import { Text } from '__pages__/dashboard/dashboard.styled';

export default function Navbar() {
  const { isDarkMode, darkModeToggle } = Theme();
  const { isLoggedIn, setIsLoggedIn, token } = useData();
  const router = useRouter();
  const theme = useTheme();
  const isSmall = useMediaQuery('(max-width:480px)');

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.setItem(CREDENTIALKEYS.LOGINCHECK, '' + false);
    sessionStorage.setItem(CREDENTIALKEYS.TOKEN, '');
    router.push(ROUTES.LOGIN);
  };

  return (
    <RootStyle>
      <ToolbarStyle>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Logo src="./static/push.svg" sx={{ width: 90, height: 120 }} />
          <Box>
            <Text size="32px" weight="500">
              Push SnapShots
            </Text>
            {!isSmall && (
              <Text size="15px" color="#657795">
                Explore trends, activity and track growth on the Push Network
              </Text>
            )}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="outlined"
            style={{ marginRight: '5px' }}
            onClick={() => {
              router.push(ROUTES.DASHBOARD);
              // getChannels({ token });
              // getSubscribers({
              //   token,
              //   startDate: '',
              //   endDate: '',
              //   channel: 'All',
              //   source: 'ETH_TEST_GOERLI',
              // });
              getNotifications({
                token,
                startDate: '2022-10-20',
                endDate: '2022-10-29',
              });
              // getLeaderBoard({ token });
            }}
          >
            Dashboard
          </Button>
          <Button
            variant="outlined"
            style={{ marginRight: '5px' }}
            onClick={() => router.push(ROUTES.ADMIN)}
          >
            Admin Panel
          </Button>
          {isLoggedIn ? (
            <Button variant="outlined" onClick={() => logout()}>
              Logout
            </Button>
          ) : null}
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
              sunColor="#494D5F"
              moonColor="#787E99"
            />
          </Box>
        </Box>
      </ToolbarStyle>
    </RootStyle>
  );
}
