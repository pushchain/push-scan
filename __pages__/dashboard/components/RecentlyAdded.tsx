// React, NextJS imports
import React, { useEffect, useState } from 'react';

// Internal Components imports
import { getLeaderBoard } from '../../../utils/api';
import LeaderBoard from './LeaderBoard/LeaderBoard';

export default function RecentlyAdded() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await getLeaderBoard({
          limit: 5,
          sort: 'created',
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
    <LeaderBoard title="Recently Added " data={data} isLoading={isLoading} />
  );
}
