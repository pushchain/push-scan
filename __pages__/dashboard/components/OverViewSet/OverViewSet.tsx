import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { OverviewItem } from './overview.styled';
import { Text } from '../../dashboard.styled';
import {
  getChats,
  getUsers,
  getGovernanceData,
  getNotifications,
} from 'utils/api';
import { useData } from 'contexts/DataContext';
import { HorizontalLine } from '../../dashboard.styled';

export default function OverViewSet() {
  const { token, pushIntegrations } = useData();
  const [chatUsers, setChatUsers] = React.useState<number>(0);
  const [chatSent, setChatSent] = React.useState<number>(0);
  const [notifiactionsSent, setNotificationsSent] = React.useState<number>(0);

  const overViewData = [
    {
      image: './static/push-integration.svg',
      title: 'Push Integrations',
      value: pushIntegrations,
    },
    {
      image: './static/chat-sent.svg',
      title: 'Chat Sent',
      value: chatSent,
    },
    {
      image: './static/chat-user.svg',
      title: 'Chat Users',
      value: chatUsers,
    },
    {
      image: './static/notifications.svg',
      title: 'Notifications Sent',
      value: notifiactionsSent,
    },
  ];
  const theme = useTheme();

  React.useEffect(() => {
    (async () => {
      let total = 0;
      const chatResponse = await getChats({ token });
      setChatSent(chatResponse?.totalMessages);

      const userResponse = await getUsers({ token });
      setChatUsers(userResponse?.totalUsers);

      const notificationResponse = await getNotifications({ token });
      const notifictionAnalyticsData =
        notificationResponse.notificationAnalytics;

      for (let i = 0; i < notifictionAnalyticsData.length; i++) {
        for (let key in notifictionAnalyticsData[i]) {
          if (key === 'date') {
            continue;
          } else {
            total += notifictionAnalyticsData[i][key].notification;
          }
        }
      }
      setNotificationsSent(total);
    })();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          width: '100%',
        }}
        mt={5}
        mb={3}
      >
        <Text size="18px" weight={400}>
          Overview
        </Text>
        <Grid
          container
          width="100%"
          gap={3}
          justifyContent="space-between"
          mt={2}
        >
          {overViewData.map((data) => (
            <OverviewItem
              key={data.title}
              style={{
                backgroundColor: theme.palette.background.card,
                border: `1px solid ${theme.palette.outline}`,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Text size="18px">{data.title}</Text>
                <Text size="36px">{data.value?.toLocaleString()}</Text>
              </Box>
              <Box
                component="img"
                src={data.image}
                sx={{ width: '60px', height: '60px' }}
              />
            </OverviewItem>
          ))}
        </Grid>
      </Box>
      <HorizontalLine />
    </>
  );
}
