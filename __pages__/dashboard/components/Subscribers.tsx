import React from 'react';
import Chart from './Charts/Chart';

export default function Subscribers({ data, min, max, total, isLoading }) {
  return (
    <Chart
      title="Subscribers"
      value={total}
      label="Subscribers"
      min={min}
      max={max}
      data={data}
      isLoading={isLoading}
    />
  );
}
