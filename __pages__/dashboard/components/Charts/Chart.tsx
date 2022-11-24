import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
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
  const theme = useTheme();
  const isSmall = useMediaQuery('(max-width:480px)');

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
      // labels: {
      //   formatter: function (value) {
      //     return new Date(value);
      //   },
      // },
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
          height: 'auto',
          backgroundColor: isSmall
            ? 'transparent'
            : theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
          '@media(max-width:480px)': {
            border: 'none',
          },
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
