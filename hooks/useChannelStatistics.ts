import React from 'react';
import { getSubscribers, getNotifications } from '../utils/api';

export default function useChannelStatistics({
  startDate,
  endDate,
  selectedChannel,
  selectedChain,
}) {
  const [subscriberCategories, setSubscriberCategories] = React.useState<any[]>(
    []
  );
  const [subscriberValues, setSubscriberValues] = React.useState<any[]>([]);
  const [notificationCategories, setNotificationCategories] = React.useState<
    any[]
  >([]);
  const [notificationValues, setNotificationValues] = React.useState<any[]>([]);
  const [channelList, setChannelList] = React.useState<any[]>([]);

  React.useEffect(() => {
    let subscriberCategory: any[] = [],
      subscriberValue: any[] = [],
      notificationCategory: any[] = [],
      notificationValue: any[] = [],
      channels: any[] = [];
    channels.push({
      name: 'All Channels',
      channel: 'All',
    });

    (async () => {
      const subscriberResponse = await getSubscribers({
        startDate: startDate,
        endDate: endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });
      const notificationsResponse = await getNotifications({
        startDate: startDate,
        endDate: endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });

      // Retrieving and formatting Subscriber data
      const subscriberAnalytics = subscriberResponse.subscriberAnalytics;
      const channelSubscriberDetails = subscriberResponse.channelDetails;
      let channelSubscriberData = {};
      let subscriberData: any[] = [];

      for (let i = 0; i < subscriberAnalytics.length; i++) {
        for (let key in subscriberAnalytics[i]) {
          if (key === 'date') {
            continue;
          } else {
            if (channelSubscriberData[key]) {
              channelSubscriberData[key] +=
                subscriberAnalytics[i][key].subscriber;
            } else {
              channelSubscriberData[key] = 0;
              channelSubscriberData[key] +=
                subscriberAnalytics[i][key].subscriber;
            }
          }
        }
      }
      for (let key in channelSubscriberData) {
        let name = channelSubscriberDetails[key].name;
        subscriberData.push({
          name: name,
          subscribers: channelSubscriberData[key],
        });
        channels.push({
          name: name,
          channel: key,
          icon: channelSubscriberDetails[key].icon,
        });
      }

      const sortedSubscribers = subscriberData?.sort(
        (a, b) => b?.subscribers - a?.subscribers
      );

      const subscriberChannelLimit =
        sortedSubscribers?.length > 10 ? 10 : sortedSubscribers?.length;

      for (let i = 0; i < subscriberChannelLimit; i++) {
        subscriberCategory.push(sortedSubscribers[i]?.name);
        subscriberValue.push(sortedSubscribers[i]?.subscribers);
      }

      // Retrieving and formatting notification data
      let channeNotificationData = {};
      let notificationData: any[] = [];

      const notificationAnalytics = notificationsResponse.notificationAnalytics;
      const channelNotificationDetails = notificationsResponse.channelDetails;
      for (let i = 0; i < notificationAnalytics.length; i++) {
        for (let key in notificationAnalytics[i]) {
          if (key === 'date') {
            continue;
          } else {
            if (channeNotificationData[key]) {
              channeNotificationData[key] +=
                notificationAnalytics[i][key].notification;
            } else {
              channeNotificationData[key] = 0;
              channeNotificationData[key] +=
                notificationAnalytics[i][key].notification;
            }
          }
        }
      }
      for (let key in channeNotificationData) {
        let name = channelNotificationDetails[key].name;
        notificationData.push({
          name: name,
          notifications: channeNotificationData[key],
        });
      }
      const sortedNotifications = notificationData?.sort(
        (a, b) => b?.notifications - a?.notifications
      );
      const notificationChannelLimit =
        sortedNotifications?.length > 10 ? 10 : sortedNotifications?.length;

      for (let i = 0; i < notificationChannelLimit; i++) {
        notificationCategory.push(sortedNotifications[i].name);
        notificationValue.push(sortedNotifications[i].notifications);
      }
      setSubscriberCategories(subscriberCategory);
      setSubscriberValues(subscriberValue);
      setNotificationCategories(notificationCategory);
      setNotificationValues(notificationValue);
      setChannelList(channels);
    })();
  }, [selectedChain]);

  return {
    subscriberCategories,
    subscriberValues,
    notificationCategories,
    notificationValues,
    channelList,
  };
}
