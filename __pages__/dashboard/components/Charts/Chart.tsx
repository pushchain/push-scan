import { useState } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import BaseOptions from '../BaseOptions';
import _ from 'lodash';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function Chart({
  title,
  value,
  label,
  max,
  min,
  data,
}: {
  title: string;
  value: number;
  label: string;
  max: any;
  min: any;
  data: any;
}) {
  // const [min, setMin] = useState(Date.now() - 30 * 86400000);
  // const [max, setMax] = useState(Date.now());
  const theme = useTheme();

  // [
  //   [Date.now() - 30 * 86400000, 9000],
  //   [Date.now() - 29 * 86400000, 5000],
  //   [Date.now() - 28 * 86400000, 8000],
  //   [Date.now() - 27 * 86400000, 7000],
  //   [Date.now() - 26 * 86400000, 6000],
  //   [Date.now() - 25 * 86400000, 5000],
  //   [Date.now() - 24 * 86400000, 4000],
  //   [Date.now() - 23 * 86400000, 3000],
  //   [Date.now() - 22 * 86400000, 2000],
  //   [Date.now() - 21 * 86400000, 1000],
  //   [Date.now() - 20 * 86400000, 2000],
  //   [Date.now() - 19 * 86400000, 4000],
  //   [Date.now() - 18 * 86400000, 3000],
  //   [Date.now() - 17 * 86400000, 1000],
  //   [Date.now() - 16 * 86400000, 2000],
  //   [Date.now() - 15 * 86400000, 4000],
  //   [Date.now() - 14 * 86400000, 5000],
  //   [Date.now() - 13 * 86400000, 3000],
  //   [Date.now() - 12 * 86400000, 5000],
  //   [Date.now() - 11 * 86400000, 8000],
  //   [Date.now() - 10 * 86400000, 2000],
  //   [Date.now() - 9 * 86400000, 1000],
  //   [Date.now() - 8 * 86400000, 3000],
  //   [Date.now() - 7 * 86400000, 6000],
  //   [Date.now() - 6 * 86400000, 4000],
  //   [Date.now() - 5 * 86400000, 2000],
  //   [Date.now() - 4 * 86400000, 3000],
  //   [Date.now() - 3 * 86400000, 2000],
  //   [Date.now() - 2 * 86400000, 1000],
  //   [Date.now() - 86400000, 4000],
  //   [Date.now(), 5000],
  // ],

  const options = _.merge(BaseOptions(), {
    series: [
      {
        name: label,
        data: data,
      },
    ],
    colors: ['#DF4FA3'],
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
      offsetX: -10,
      // dropShadow: {
      //   enabled: true,
      //   enabledOnSeries: "Push Data",
      //   top: 0,
      //   left: 0,
      //   blur: 3,
      //   color: ["#CF1C84", "#CF1C84", "#CF1C84"],
      //   opacity: 0.01,
      // },
    },
    yaxis: {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
    },
    xaxis: {
      type: 'datetime',
      min: min,
      max: max,
      // tickAmount: 5,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  });

  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card
        sx={{
          height: '100%',
          backgroundColor: theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
        }}
      >
        <CardHeader title={title} />
        <Typography
          variant="subtitle1"
          ml={3}
          style={{ fontWeight: 400, fontSize: '28px' }}
        >
          {value?.toLocaleString()}
        </Typography>

        <CardContent>
          <ReactApexChart
            type="area"
            series={options?.series}
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
