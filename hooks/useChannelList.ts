import React from 'react';
import { getLeaderBoard } from 'utils/api';

export default function useChannelList({ token, selectedChain }) {
  const [channelList, setChannelList] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      setChannelList([]);
      const allChannels = {
        // icon: selectedChain?.image,
        name: 'All Channels',
        channel: 'All',
      };
      try {
        const res = await getLeaderBoard({
          token: token,
          limit: 30,
          sort: 'subscribers',
          order: 'desc',
        });
        setChannelList([allChannels, ...res.leaderboardAnalytics]);
      } catch (e) {
        console.log('Error occured', e);
      }
    })();
    return () => setChannelList([]);
  }, [selectedChain]);

  return channelList;
}
