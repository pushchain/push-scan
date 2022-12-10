import React from 'react';
import getDatesArray from '../utils/helpers';
import { getSubscribers, getNotifications } from 'utils/api';

export default function useStatisticData({
  selectedChannel,
  selectedChain,
  startDate,
  endDate,
  interval,
  token,
}) {
  const [subscriberData, setSubscriberData] = React.useState<any[]>([]);
  const [notificationData, setNotificationData] = React.useState<any[]>([]);
  React.useEffect(() => {
    (async () => {
      setSubscriberData([]);
      setNotificationData([]);

      const dateArray = getDatesArray({
        start: startDate,
        end: endDate,
        interval,
      });

      for (let i = 0; i < dateArray.length - 1; i++) {
        const newStartDate = dateArray[i];
        const newEndDate = dateArray[i + 1];
        const subscriberRes = await getSubscribers({
          token: token,
          startDate: newStartDate,
          endDate: newEndDate,
          channel: selectedChannel?.channel,
          chain: selectedChain?.value,
        });
        setSubscriberData((data) => [
          ...data,
          [new Date(newEndDate).getTime(), subscriberRes?.totalSubscribers],
        ]);

        const notificationRes = await getNotifications({
          token: token,
          startDate: newStartDate,
          endDate: newEndDate,
          channel: selectedChannel?.channel,
          chain: selectedChain.value,
        });
        setNotificationData((data) => [
          ...data,
          [new Date(newEndDate).getTime(), notificationRes?.totalNotification],
        ]);
      }
    })();

    return () => {
      setSubscriberData([]);
      setNotificationData([]);
    };
  }, [selectedChain, selectedChannel, interval, startDate]);

  return { notificationData, subscriberData };
}
