// React, NextJS imports
import React, { useEffect, useState } from 'react';

// Internal Components imports
import { getLeaderBoard } from '../../../utils/api';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import { LeaderboardType } from '../../../types/otherTypes';

export default function TopChannels() {
  const [data, setData] = useState<LeaderboardType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    })();
  }, []);

  return (
    <LeaderBoard
      title="Top channels by subscriber count"
      data={data}
      isLoading={isLoading}
    />
  );
}
