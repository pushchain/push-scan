// React, NextJS imports
import React from 'react';

// Internal Components imports
import LeaderBoard from './LeaderBoard/LeaderBoard';
import { getSubscribers } from '../../../utils/api';
import { useData } from '../../../contexts/DataContext';

export default function Trending() {
  const { token } = useData();
  const [leaderBoard, setLeaderBoard] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      let channelData: any[] = [];
      const firstEndDate = new Date(Date.now()).toISOString().split('T')[0];
      const secondEndDate = new Date(Date.now() - 7 * 86400000)
        .toISOString()
        .split('T')[0];
      const startDate = new Date('2022-01-01');
      const currentRes = await getSubscribers({
        token,
        startDate,
        endDate: firstEndDate,
        channel: 'All',
        chain: 'ETH_TEST_GOERLI',
      });
      const weekRes = await getSubscribers({
        token,
        startDate,
        endDate: secondEndDate,
        channel: 'All',
        chain: 'ETH_TEST_GOERLI',
      });
      const weekChannelData = weekRes?.subscriberAnalytics;
      const currentChannelData = currentRes?.subscriberAnalytics;
      for (let i = 0; i < weekChannelData?.length; i++) {
        for (let j = i; j < currentChannelData?.length; j++) {
          if (weekChannelData[i].channel === currentChannelData[j].channel) {
            const trendPercentage = (
              ((currentChannelData[j].subscriber -
                weekChannelData[i].subscriber) /
                weekChannelData[i].subscriber) *
              100
            ).toFixed(2);
            channelData.push({
              name: currentChannelData[j].name,
              channel: weekChannelData[i].channel,
              icon: weekChannelData[i].icon,
              trend: trendPercentage,
              subscriber: currentChannelData[j].subscriber,
            });
            break;
          }
        }
      }
      // console.log('current', currentRes?.subscriberAnalytics);
      // console.log('week', weekRes?.subscriberAnalytics);
      const sorted = channelData.sort(
        (a, b) => parseFloat(b?.trend) - parseFloat(a?.trend)
      );
      setLeaderBoard(sorted.slice(0, 5));
    })();
  }, []);

  return <LeaderBoard title="Trending" data={leaderBoard} isTrending={true} />;
}
