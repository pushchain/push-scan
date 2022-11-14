// import LineChart from "./LineChart";
import Chart from "./Charts/Chart";

export default function Subscribers({ min, max }) {
  return (
    <Chart
      title="Subscribers"
      value={12345}
      label="Subscribers"
      min={min}
      max={max}
    />
  );
}
