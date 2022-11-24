// import LineChart from "./LineChart";
import Chart from './Charts/Chart';

export default function Subscribers({ data, min, max, total }) {
  return (
    <Chart
      title="Subscribers"
      value={total}
      label="Subscribers"
      min={min}
      max={max}
      data={data}
    />
  );
}
