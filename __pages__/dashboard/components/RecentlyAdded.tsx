import React, { useEffect, useState } from 'react';
import { getLeaderBoard } from 'utils/api';
import { useData } from 'contexts/DataContext';
import LeaderBoard from './LeaderBoard/LeaderBoard';

export default function RecentlyAdded() {
  const [data, setData] = useState([]);
  const { token } = useData();

  useEffect(() => {
    (async () => {
      try {
        const res = await getLeaderBoard({
          token: token,
          limit: 5,
          sort: 'created',
          order: 'desc',
        });

        setData(res.leaderboardAnalytics);
      } catch (e) {
        console.log('Error occured', e);
      }
    })();
  }, []);

  return <LeaderBoard title="Recently Added " data={data} />;
}
