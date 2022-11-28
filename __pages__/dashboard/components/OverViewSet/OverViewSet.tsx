import * as React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { OverviewItem } from './overview.styled';
import { Text, HorizontalLine } from '../../dashboard.styled';
import HorizontalChart from '../Charts/HorizontalChart';
import { getSubscribers, getNotifications } from 'utils/api';
import { useData } from 'contexts/DataContext';

export default function OverViewSet() {
  const { token } = useData();
  const isSmall = useMediaQuery('(max-width:480px)');
  const [subscriberCategories, setSubscriberCategories] = React.useState<any[]>(
    []
  );
  const [subscriberValues, setSubscriberValues] = React.useState<any[]>([]);
  const [notificationCategories, setNotificationCategories] = React.useState<
    any[]
  >([]);
  const [notificationValues, setNotificationValues] = React.useState<any[]>([]);

  const val = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380].reverse();
  const cat = [
    'Push Protocol',
    'Coindesk',
    'Snapshot',
    'MakerDAO',
    'Rekt',
    'Tollan Worlds',
    'CFI',
    'Earnifi-Crypto',
    'Banker',
    'Lens Protocol',
  ];
  const overViewData = [
    {
      image: './static/push-integration.svg',
      title: 'Push Integrations',
      value: 1234,
    },
    { image: './static/chat-sent.svg', title: 'Chat Sent', value: 1234 },
    { image: './static/chat-user.svg', title: 'Chat User', value: 1234 },
    { image: './static/chat-request.svg', title: 'Chat Request', value: 1234 },
  ];
  const theme = useTheme();

  React.useEffect(() => {
    let subscriberCategory = [],
      subscriberValue = [],
      notificationCategory = [],
      notificationValue = [];

    (async () => {
      const subscriberRes = await getSubscribers({ token });
      const notificationsRes = await getNotifications({ token });
      const sortedSubscribers = subscriberRes?.subscriberAnalytics?.sort(
        (a, b) => b?.subscriber - a?.subscriber
      );
      const subscriberChannelLimit =
        sortedSubscribers?.length > 10 ? 10 : sortedSubscribers.length;

      for (let i = 0; i < subscriberChannelLimit; i++) {
        subscriberCategory.push(sortedSubscribers[i].name);
        subscriberValue.push(sortedSubscribers[i].subscriber);
      }
      const sortedNotifications = notificationsRes?.notificationAnalytics?.sort(
        (a, b) => b?.notification - a?.notification
      );

      const notificationChannelLimit =
        sortedNotifications.length > 10 ? 10 : sortedNotifications.length;
      for (let i = 0; i < notificationChannelLimit; i++) {
        notificationCategory.push(sortedNotifications[i].name);
        notificationValue.push(sortedNotifications[i].notification);
      }
      setSubscriberCategories(subscriberCategory);
      setSubscriberValues(subscriberValue);
      setNotificationCategories(notificationCategory);
      setNotificationValues(notificationValue);
    })();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
      }}
      mt={5}
    >
      <Text size="18px">Overview</Text>
      <Grid container gap={3} justifyContent="center" mt={2} width="100%">
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
              <Text size="36px">{data.value.toLocaleString()}</Text>
            </Box>
            <Box
              component="img"
              src={data.image}
              sx={{ width: '60px', height: '60px' }}
            />
          </OverviewItem>
        ))}
      </Grid>
      <Grid container spacing={isSmall ? 0 : 3} justifyContent="center" mt={0}>
        <HorizontalChart
          title="Subscribers By Channel"
          label="Subscribers"
          category={subscriberCategories}
          value={subscriberValues}
        />
        <HorizontalLine />
        <HorizontalChart
          title="Notifications By Channel"
          label="Notifications"
          category={notificationCategories}
          value={notificationValues}
        />
      </Grid>
    </Box>
  );
}
