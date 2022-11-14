// import LineChart from "./LineChart";
import Chart from "./Charts/Chart";

export default function Notifications({ min, max }) {
  return (
    <Chart
      title="Notifications Sent"
      value={123456}
      label="Sent"
      min={min}
      max={max}
    />
  );
}
