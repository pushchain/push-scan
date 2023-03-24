// React, NextJS imports
import React from 'react';

// Internal Components imports
import LeaderBoard from './LeaderBoard/LeaderBoard';
import { getSubscribers } from '../../../utils/api';
import { CHAIN_LIST } from '../../../utils/constants';
import { LeaderboardType } from '../../../types/otherTypes';

export default function Trending() {
  const [leaderBoard, setLeaderBoard] = React.useState<LeaderboardType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      let trendingChannelData: LeaderboardType[] = [];
      let currentSubscriberData = {};
      let weekBackSubscriberData = {};

      const firstEndDate = new Date(Date.now()).toISOString().split('T')[0];
      const secondEndDate = new Date(Date.now() - 7 * 86400000)
        .toISOString()
        .split('T')[0];
      const startDate = new Date('2022-01-01');

      const currentRes = await getSubscribers({
        startDate,
        endDate: firstEndDate,
        channel: 'All',
        chain: CHAIN_LIST[1].value,
      });

      const weekRes = await getSubscribers({
        startDate,
        endDate: secondEndDate,
        channel: 'All',
        chain: CHAIN_LIST[1].value,
      });

      const weekChannelDataResponse = weekRes?.subscriberAnalytics;
      const currentChannelDataResponse = currentRes?.subscriberAnalytics;
      const channelDetails = weekRes?.channelDetails;

      for (let i = 0; i < currentChannelDataResponse?.length; i++) {
        for (let key in currentChannelDataResponse[i]) {
          if (key === 'date') {
            continue;
          } else {
            if (currentSubscriberData[key]) {
              currentSubscriberData[key] +=
                currentChannelDataResponse[i][key]?.subscriber;
            } else {
              currentSubscriberData[key] = 0;
              currentSubscriberData[key] +=
                currentChannelDataResponse[i][key]?.subscriber;
            }
          }
        }
      }
      for (let i = 0; i < weekChannelDataResponse?.length; i++) {
        for (let key in weekChannelDataResponse[i]) {
          if (key === 'date') {
            continue;
          } else {
            if (weekBackSubscriberData[key]) {
              weekBackSubscriberData[key] +=
                weekChannelDataResponse[i][key]?.subscriber;
            } else {
              weekBackSubscriberData[key] = 0;
              weekBackSubscriberData[key] +=
                weekChannelDataResponse[i][key]?.subscriber;
            }
          }
        }
      }

      for (let key in weekBackSubscriberData) {
        let finalValue = currentSubscriberData[key] || 0;
        const trend = (
          ((finalValue - weekBackSubscriberData[key]) /
            weekBackSubscriberData[key]) *
          100
        ).toFixed(2);
        trendingChannelData.push({
          channel: key,
          subscriber: currentSubscriberData[key],
          name: channelDetails[key]?.name,
          icon: channelDetails[key]?.icon,
          trend: trend,
        });
      }

      const sorted = trendingChannelData?.sort(
        (a, b) => parseFloat(b?.trend) - parseFloat(a?.trend)
      );
      setLeaderBoard(sorted.slice(0, 5));
      setIsLoading(false);
    })();
  }, []);

  return (
    <LeaderBoard
      title="Trending"
      data={leaderBoard}
      isTrending={true}
      isLoading={isLoading}
    />
  );
}
