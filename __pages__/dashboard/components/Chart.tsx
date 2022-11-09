import { useState } from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import BaseOptions from "./BaseOptions";
import _ from "lodash";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Chart({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  const [min, setMin] = useState(Date.now() - 30 * 86400000);
  const [max, setMax] = useState(Date.now());
  const [active, setActive] = useState<number>(4);

  const options = _.merge(BaseOptions(), {
    series: [
      {
        name: "Push Data",
        data: [
          [Date.now() - 30 * 86400000, 9000],
          [Date.now() - 29 * 86400000, 5000],
          [Date.now() - 28 * 86400000, 8000],
          [Date.now() - 27 * 86400000, 7000],
          [Date.now() - 26 * 86400000, 6000],
          [Date.now() - 25 * 86400000, 5000],
          [Date.now() - 24 * 86400000, 4000],
          [Date.now() - 23 * 86400000, 3000],
          [Date.now() - 22 * 86400000, 2000],
          [Date.now() - 21 * 86400000, 1000],
          [Date.now() - 20 * 86400000, 2000],
          [Date.now() - 19 * 86400000, 4000],
          [Date.now() - 18 * 86400000, 3000],
          [Date.now() - 17 * 86400000, 1000],
          [Date.now() - 16 * 86400000, 2000],
          [Date.now() - 15 * 86400000, 4000],
          [Date.now() - 14 * 86400000, 5000],
          [Date.now() - 13 * 86400000, 3000],
          [Date.now() - 12 * 86400000, 5000],
          [Date.now() - 11 * 86400000, 8000],
          [Date.now() - 10 * 86400000, 2000],
          [Date.now() - 9 * 86400000, 1000],
          [Date.now() - 8 * 86400000, 3000],
          [Date.now() - 7 * 86400000, 6000],
          [Date.now() - 6 * 86400000, 4000],
          [Date.now() - 5 * 86400000, 2000],
          [Date.now() - 4 * 86400000, 3000],
          [Date.now() - 3 * 86400000, 2000],
          [Date.now() - 2 * 86400000, 1000],
          [Date.now() - 86400000, 4000],
          [Date.now(), 5000],
        ],
      },
    ],
    chart: {
      id: "area-datetime",
      type: "line",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
      offsetX: -10,
    },
    // markers: {
    //   size: 2,
    //   style: "solid",
    //   colors:"white"
    // },
    yaxis: {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
    },
    xaxis: {
      type: "datetime",
      //   min: new Date("01 Mar 2012").getTime(),
      min: min,
      max: max,
      // tickAmount: 5,
    },
  });

  const handle1 = () => {
    setActive(1);
    setMin(Date.now() - 10 * 86400000);
  };

  const handle6 = () => {
    setActive(2);
    setMin(Date.now() - 20 * 86400000);
  };

  const handle12 = () => {
    setActive(3);
    setMin(Date.now() - 30 * 86400000);
  };

  const handleAll = () => {
    setActive(4);
    setMin(Date.now() - 30 * 86400000);
    setMax(Date.now());
  };

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: "transparent",
          border: " 1px solid #BAC4D6",
        }}
      >
        <CardHeader title={title} />
        <Typography
          variant="subtitle1"
          ml={3}
          style={{ fontWeight: 400, fontSize: "28px" }}
        >
          {value}
        </Typography>

        <CardContent>
          <Button
            style={{ backgroundColor: `${active === 1 ? "blue" : "white"}` }}
            onClick={handle1}
          >
            10D
          </Button>
          <Button
            style={{ backgroundColor: `${active === 2 ? "blue" : "white"}` }}
            onClick={handle6}
          >
            20D
          </Button>
          <Button
            style={{ backgroundColor: `${active === 3 ? "blue" : "white"}` }}
            onClick={handle12}
          >
            30D
          </Button>
          <Button
            style={{ backgroundColor: `${active === 4 ? "blue" : "white"}` }}
            onClick={handleAll}
          >
            ALL
          </Button>
          <ReactApexChart
            type="line"
            series={options.series}
            options={options}
            height={250}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}

const Button = styled.button`
  padding: 3px 5px;
  margin-right: 0px;
  border: none;
`;
