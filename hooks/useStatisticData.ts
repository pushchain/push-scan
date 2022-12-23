import React from 'react';
import getDatesArray from '../utils/helpers';
import { getSubscribers, getNotifications } from '../utils/api';

export default function useStatisticData({
  selectedChannel,
  selectedChain,
  startDate,
  endDate,
  // interval,
  token,
}) {
  const [subscriberData, setSubscriberData] = React.useState<any[]>([]);
  const [notificationData, setNotificationData] = React.useState<any[]>([]);
  const [totalSubscribers, setTotalSubscribers] = React.useState(0);
  const [totalNotifications, setTotalNotifications] = React.useState(0);
  const [channelList, setChannelList] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
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

      const subscriberRes = await getSubscribers({
        token: token,
        startDate: startDate,
        endDate: endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });

      const subscriberAnalyticsData = subscriberRes.subscriberAnalytics;
      const channelDetails = subscriberRes.channelDetails;

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

      const notificationRes = await getNotifications({
        token: token,
        startDate: startDate,
        endDate: endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain.value,
      });

      const analyticsData = notificationRes.notificationAnalytics;
      let notificationsArray: any[] = [];
      for (let i = 0; i < analyticsData.length; i++) {
        let total = 0,
          dat = '';

        for (let key in analyticsData[i]) {
          if (key === 'date') {
            dat = analyticsData[i][key];
          } else {
            total += analyticsData[i][key].notification;
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

      setTotalNotifications(totalNotifications);
      setTotalSubscribers(totalSubscribers);
      setSubscriberData(localSubscriberData);
      setNotificationData(localNotificationData);
      setChannelList(channels);
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
