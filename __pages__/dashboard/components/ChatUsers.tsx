// React, NextJS imports
import React from 'react';

// Internal Components imports
import Chart from './Charts/Chart';

export default function ChatUsers({ data, min, max, total }) {
  return (
    <Chart
      title="Chat Users"
      value={total}
      label="Users"
      min={min}
      max={max}
      data={data}
    />
  );
}
