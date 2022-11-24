// import LineChart from "./LineChart";
import Chart from './Charts/Chart';

export default function Notifications({ data, min, max, total }) {
  return (
    <Chart
      title="Notifications Sent"
      value={total}
      label="Sent"
      min={min}
      max={max}
      data={data}
    />
  );
}
