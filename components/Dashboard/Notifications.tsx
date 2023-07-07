// React, NextJS imports
import React from 'react';

// Internal Components imports
import Chart from '../../charts/LineChart';

export default function Notifications({ data, min, max, total, isLoading }) {
  return (
    <Chart
      title="Notifications Sent"
      value={total}
      label="Sent"
      min={min}
      max={max}
      data={data}
      isLoading={isLoading}
    />
  );
}
