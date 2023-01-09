import React from 'react';
import getDatesArray from '../utils/helpers';
import { getSubscribers, getNotifications } from '../utils/api';

export default function useStatisticData({
  selectedChannel,
  selectedChain,
  startDate,
  endDate,
  // interval,
  setStatisticDataLoading,
}) {
  const [subscriberData, setSubscriberData] = React.useState<any[]>([]);
  const [notificationData, setNotificationData] = React.useState<any[]>([]);
  const [totalSubscribers, setTotalSubscribers] = React.useState(0);
  const [totalNotifications, setTotalNotifications] = React.useState(0);
  const [channelList, setChannelList] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      setStatisticDataLoading(true);
      setSubscriberData([]);
      setNotificationData([]);
      let localNotificationData: any[] = [];
      let localSubscriberData: any[] = [];
      let totalNotifications = 0;
      let totalSubscribers = 0;
      let channels: any[] = [];
      channels.push({
        name: 'All Channels',
        channel: 'All',
      });

      const dateArray = getDatesArray({
        start: startDate,
        end: endDate,
        interval: 1,
      });

      let notificationResponse = await getNotifications({
        startDate: startDate,
        endDate: endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });

      const notificationAnalyticsData =
        notificationResponse.notificationAnalytics;
      let notificationsArray: any[] = [];
      for (let i = 0; i < notificationAnalyticsData.length; i++) {
        let total = 0,
          dat = '';

        for (let key in notificationAnalyticsData[i]) {
          if (key === 'date') {
            dat = notificationAnalyticsData[i][key];
          } else {
            total += notificationAnalyticsData[i][key].notification;
          }
        }
        notificationsArray.push({ date: dat, notifications: total });
      }

      for (let i = 0; i < dateArray.length; i++) {
        let isFound = false;
        for (let j = 0; j < notificationsArray.length; j++) {
          if (
            new Date(notificationsArray[j].date).toDateString() ===
            new Date(dateArray[i]).toDateString()
          ) {
            isFound = true;
            localNotificationData.push([
              notificationsArray[j].date,
              notificationsArray[j].notifications,
            ]);
            totalNotifications += notificationsArray[j].notifications;
            break;
          }
        }
        if (!isFound) {
          localNotificationData.push([dateArray[i], 0]);
        }
      }

      const subscriberResponse = await getSubscribers({
        startDate: startDate,
        endDate: endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });

      const subscriberAnalyticsData = subscriberResponse.subscriberAnalytics;

      let subscriberArray: any[] = [];
      for (let i = 0; i < subscriberAnalyticsData.length; i++) {
        let total = 0,
          dat = '';
        for (let key in subscriberAnalyticsData[i]) {
          if (key === 'date') {
            dat = subscriberAnalyticsData[i][key];
          } else {
            total += subscriberAnalyticsData[i][key].subscriber;
          }
        }
        subscriberArray.push({ date: dat, subscribers: total });
      }

      for (let i = 0; i < dateArray.length; i++) {
        let isFound = false;
        for (let j = 0; j < subscriberArray.length; j++) {
          if (
            new Date(subscriberArray[j].date).toDateString() ===
            new Date(dateArray[i]).toDateString()
          ) {
            isFound = true;
            localSubscriberData.push([
              subscriberArray[j].date,
              subscriberArray[j].subscribers,
            ]);
            totalSubscribers += subscriberArray[j].subscribers;
            break;
          }
        }
        if (!isFound) {
          localSubscriberData.push([dateArray[i], 0]);
        }
      }

      setTotalNotifications(totalNotifications);
      setTotalSubscribers(totalSubscribers);
      setSubscriberData(localSubscriberData);
      setNotificationData(localNotificationData);
      setChannelList(channels);
      setStatisticDataLoading(false);
    })();

    return () => {
      setSubscriberData([]);
      setNotificationData([]);
    };
  }, [selectedChain, selectedChannel, startDate]);

  return {
    totalNotifications,
    totalSubscribers,
    notificationData,
    subscriberData,
    channelList,
  };
}
