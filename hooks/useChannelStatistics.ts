import React from 'react';
import { getSubscribers, getNotifications } from '../utils/api';

export default function useChannelStatistics({ token }) {
  const [subscriberCategories, setSubscriberCategories] = React.useState<any[]>(
    []
  );
  const [subscriberValues, setSubscriberValues] = React.useState<any[]>([]);
  const [notificationCategories, setNotificationCategories] = React.useState<
    any[]
  >([]);
  const [notificationValues, setNotificationValues] = React.useState<any[]>([]);

  React.useEffect(() => {
    let subscriberCategory = [],
      subscriberValue = [],
      notificationCategory = [],
      notificationValue = [];

    (async () => {
      const subscriberRes = await getSubscribers({ token });
      const notificationsRes = await getNotifications({ token });
      const sortedSubscribers: any[] = subscriberRes?.subscriberAnalytics?.sort(
        (a, b) => b?.subscriber - a?.subscriber
      );
      const subscriberChannelLimit: number =
        sortedSubscribers?.length > 10 ? 10 : sortedSubscribers?.length;

      for (let i = 0; i < subscriberChannelLimit; i++) {
        subscriberCategory.push(sortedSubscribers[i]?.name);
        subscriberValue.push(sortedSubscribers[i]?.subscriber);
      }
      const sortedNotifications: any[] =
        notificationsRes?.notificationAnalytics?.sort(
          (a, b) => b?.notification - a?.notification
        );

      const notificationChannelLimit =
        sortedNotifications?.length > 10 ? 10 : sortedNotifications?.length;
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

  return {
    subscriberCategories,
    subscriberValues,
    notificationCategories,
    notificationValues,
  };
}
