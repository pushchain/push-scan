// React, NextJS imports
import React from 'react';

// Internal Components imports
import Chart from '../../charts/LineChart';

export default function RequestSent({ data, min, max, total }) {
  return (
    <Chart
      title="Requests Sent"
      value={total}
      label="Sent"
      min={min}
      max={max}
      data={data}
    />
  );
}
