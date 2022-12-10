import React from 'react';
import Chart from './Charts/Chart';
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
