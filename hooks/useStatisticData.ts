// React, NextJS imports
import React from 'react';

// Internal Components imports
import getDatesArray from '../utils/helpers';
import { getSubscribers, getNotifications } from '../utils/api';
import { DATA_KEYS } from '../utils/constants';
import { useData } from '../contexts/DataContext';
import { DataContextType } from '../types/context';
import { ChainType, ChannelType } from '../types/context';

interface useStatisticDataPropsType {
  selectedChannel: ChannelType;
  selectedChain: ChainType;
  startDate: string | Date;
  endDate: string | Date;
}

export default function useStatisticData({
  selectedChannel,
  selectedChain,
  startDate,
  endDate,
}: // interval,
useStatisticDataPropsType) {
  const {
    setSubscriberData,
    setNotificationData,
    setTotalNotifications,
    setTotalSubscribers,
    setStatisticDataLoading,
  }: DataContextType = useData();

  React.useEffect(() => {
    (async () => {
      setStatisticDataLoading?.(true);
      setSubscriberData?.([]);
      setNotificationData?.([]);
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
        notificationResponse?.notificationAnalytics;
      let notificationsArray: any[] = [];
      for (let i = 0; i < notificationAnalyticsData?.length; i++) {
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
        for (let j = 0; j < notificationsArray?.length; j++) {
          if (
            new Date(notificationsArray[j].date).toDateString() ===
            new Date(dateArray[i]).toDateString()
          ) {
            isFound = true;
            totalNotifications += notificationsArray[j].notifications;
            localNotificationData.push([
              notificationsArray[j].date,
              totalNotifications,
            ]);

            break;
          }
        }
        if (!isFound) {
          localNotificationData.push([dateArray[i], totalNotifications]);
        }
      }

      const subscriberResponse = await getSubscribers({
        startDate: startDate,
        endDate: endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });

      const subscriberAnalyticsData = subscriberResponse?.subscriberAnalytics;

      let subscriberArray: any[] = [];
      for (let i = 0; i < subscriberAnalyticsData?.length; i++) {
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
            totalSubscribers += subscriberArray[j].subscribers;
            localSubscriberData.push([
              subscriberArray[j].date,
              totalSubscribers,
            ]);
            break;
          }
        }
        if (!isFound) {
          localSubscriberData.push([dateArray[i], totalSubscribers]);
        }
      }

      setTotalNotifications?.(totalNotifications);
      sessionStorage.setItem(
        DATA_KEYS.TOTAL_NOTIFICATIONS,
        JSON.stringify(totalNotifications)
      );
      setTotalSubscribers?.(totalSubscribers);
      sessionStorage.setItem(
        DATA_KEYS.TOTAL_SUBSCRIBERS,
        JSON.stringify(totalSubscribers)
      );
      setSubscriberData?.(localSubscriberData);
      sessionStorage.setItem(
        DATA_KEYS.SUBSCRIBER_DATA,
        JSON.stringify(localSubscriberData)
      );
      setNotificationData?.(localNotificationData);
      sessionStorage.setItem(
        DATA_KEYS.NOTIFICATION_DATA,
        JSON.stringify(localNotificationData)
      );
      setStatisticDataLoading?.(false);
    })();

    return () => {
      setSubscriberData?.([]);
      setNotificationData?.([]);
    };
  }, [selectedChain, selectedChannel, startDate]);
}
