import * as React from 'react';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import { getLeaderBoard, getSubscribers } from 'utils/api';
import { useData } from 'contexts/DataContext';

export default function Trending() {
  const { token } = useData();
  const [leaderBoard, setLeaderBoard] = React.useState<any[]>([]);
  // const data = [
  //   {
  //     icon: '/static/Clothing.png',
  //     name: 'Lens Protocol',
  //     subscriber: 100,
  //     trend: 10,
  //   },
  //   {
  //     icon: '/static/Clothing.png',
  //     name: 'Coinshots',
  //     subscriber: 200,
  //     trend: 7.4,
  //   },
  //   {
  //     icon: '/static/Clothing.png',
  //     name: 'Aave',
  //     subscriber: 300,
  //     trend: 3.2,
  //   },
  //   {
  //     icon: '/static/Clothing.png',
  //     name: 'Meet with Wallet',
  //     subscriber: 200,
  //     trend: 7.5,
  //   },
  //   {
  //     icon: '/static/Clothing.png',
  //     name: 'Uniswap',
  //     subscriber: 300,
  //     trend: 3.2,
  //   },
  // ];
  React.useEffect(() => {
    (async () => {
      let channelData = [];
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
