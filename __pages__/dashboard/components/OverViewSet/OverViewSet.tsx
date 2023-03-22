// React, NextJS imports
import React from 'react';
import Image from 'next/image';

// External Library imports
import { useTheme } from 'styled-components';
import { useMediaQuery } from '@mui/material';

// Internal Components imports
import { OverviewItem } from './overview.styled';
import { Text } from '../../dashboard.styled';
import { getChats, getUsers, getNotifications } from '../../../../utils/api';
import { useData } from '../../../../contexts/DataContext';
import { useTheme as getTheme } from '../../../../contexts/ThemeContext';
import { ItemHV2, ItemVV2 } from '../../../../components/SharedStyling';
import { DATA_KEYS, CHAIN_LIST } from '../../../../utils/constants';

export default function OverViewSet() {
  const {
    pushIntegrations,
    setChatSent,
    setChatUsers,
    setNotificationsSent,
    chatUsers,
    chatSent,
    notifiactionsSent,
  } = useData();
  const { isDarkMode } = getTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

  const overViewData = [
    {
      image: !isDarkMode
        ? '/static/push-integration.svg'
        : '/static/push-integration-dark.svg',
      title: 'Push Integrations',
      value: pushIntegrations,
      size: 60,
    },
    {
      image: !isDarkMode
        ? '/static/chat-sent.svg'
        : '/static/chat-sent-dark.svg',
      title: 'Chats Sent',
      value: chatSent,
      size: 51,
    },
    {
      image: !isDarkMode
        ? '/static/chat-user.svg'
        : '/static/chat-user-dark.svg',
      title: 'Chat Users',
      value: chatUsers,
      size: 65,
    },
    {
      image: !isDarkMode
        ? '/static/notifications.svg'
        : '/static/notifications-dark.svg',
      title: 'Notifications Sent',
      value: notifiactionsSent,
      size: 41,
    },
  ];
  const theme = useTheme();

  React.useEffect(() => {
    (async () => {
      let total = 0;
      const chatResponse = await getChats();
      sessionStorage.setItem(
        DATA_KEYS.CHAT_SENT,
        JSON.stringify(chatResponse?.totalMessages)
      );
      setChatSent(chatResponse?.totalMessages);

      const userResponse = await getUsers();
      sessionStorage.setItem(
        DATA_KEYS.CHAT_USERS,
        JSON.stringify(userResponse?.totalUsers)
      );
      setChatUsers(userResponse?.totalUsers);

      const notificationResponse = await getNotifications({
        startDate: new Date('2022-01-01'),
        endDate: new Date(),
        channel: 'All',
        chain: CHAIN_LIST[0].value,
      });
      const notifictionAnalyticsData =
        notificationResponse?.notificationAnalytics;

      for (let i = 0; i < notifictionAnalyticsData?.length; i++) {
        for (let key in notifictionAnalyticsData[i]) {
          if (key === 'date') {
            continue;
          } else {
            total += notifictionAnalyticsData[i][key]?.notification;
          }
        }
      }
      sessionStorage.setItem(
        DATA_KEYS.NOTIFICATIONS_SENT,
        JSON.stringify(total)
      );
      setNotificationsSent(total);
    })();
  }, []);

  return (
    <ItemVV2
      width="100%"
      margin={isMobile ? '25px 0px 30px' : '50px 0px 30px'}
      alignItems="flex-start"
    >
      <Text size="18px" weight={400} marginBottom="20px">
        Overview
      </Text>
      <ItemHV2
        width="100%"
        gap="23px"
        justifyContent="space-between"
        marginTop="20px"
      >
        {overViewData.map((data, index) => (
          <OverviewItem
            key={data.title}
            style={{
              backgroundColor: theme.background.card,
              border: `1px solid ${theme.background.border}`,
              height: '114px',
            }}
          >
            <ItemVV2 alignItems="flex-start" justifyContent="center">
              <Text size="18px" weight={500}>
                {data.title}
              </Text>

              <Text size="36px" weight={500}>
                {data.value?.toLocaleString()}
                {index == 0 ? '+' : null}
              </Text>
            </ItemVV2>
            <Image
              src={data.image}
              width={data.size}
              height={data.size}
              alt="Overview"
            />
          </OverviewItem>
        ))}
      </ItemHV2>
    </ItemVV2>
  );
}
