import React from 'react';
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
