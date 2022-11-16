import * as React from 'react';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import { getLeaderBoard } from 'utils/api';

export default function Trending() {
  const data = [
    {
      icon: '/static/Clothing.png',
      name: 'Lens Protocol',
      subscriber: 100,
      trend: 10,
    },
    {
      icon: '/static/Clothing.png',
      name: 'Coinshots',
      subscriber: 200,
      trend: 7.4,
    },
    {
      icon: '/static/Clothing.png',
      name: 'Aave',
      subscriber: 300,
      trend: 3.2,
    },
    {
      icon: '/static/Clothing.png',
      name: 'Meet with Wallet',
      subscriber: 200,
      trend: 7.5,
    },
    {
      icon: '/static/Clothing.png',
      name: 'Uniswap',
      subscriber: 300,
      trend: 3.2,
    },
  ];

  return <LeaderBoard title="Trending" data={data} isTrending={true} />;
}
