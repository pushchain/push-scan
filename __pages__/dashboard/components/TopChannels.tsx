// React, NextJS imports
import React, { useEffect, useState } from 'react';

// Internal Components imports
import { getLeaderBoard } from '../../../utils/api';
import LeaderBoard from './LeaderBoard/LeaderBoard';

export default function TopChannels() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getLeaderBoard({
          limit: 5,
          sort: 'subscribers',
          order: 'desc',
        });

        setData(res.leaderboardAnalytics);
      } catch (e) {
        console.log('Error occured', e);
      }
    })();
  }, []);

  return <LeaderBoard title="Top channels by subscriber count" data={data} />;
}
