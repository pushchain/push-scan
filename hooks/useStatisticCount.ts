import React from 'react';
import { getSubscribers, getNotifications } from '../utils/api';

export default function useStatisticCount({
  token,
  startDate,
  endDate,
  selectedChain,
  selectedChannel,
}) {
  const [totalSubscribers, setTotalSubscribers] = React.useState(0);
  const [totalNotifications, setTotalNotifications] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      setTotalSubscribers(0);
      setTotalNotifications(0);
      const totalSubsc = await getSubscribers({
        token,
        startDate,
        endDate,
        channel: selectedChannel.channel,
        chain: selectedChain.value,
      });
      setTotalSubscribers(totalSubsc?.totalSubscribers);
      const totalNotifi = await getNotifications({
        token,
        startDate,
        endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });
      setTotalNotifications(totalNotifi?.totalNotification);
    })();
    return () => {
      setTotalSubscribers(0);
      setTotalNotifications(0);
    };
  }, [selectedChain, selectedChannel]);

  return { totalNotifications, totalSubscribers };
}
