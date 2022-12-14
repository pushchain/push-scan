import React, { useState } from 'react';
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
  const isMobile = useMediaQuery('(max-width:480px)');

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
        enabled: false,
        // autoScaleYaxis: true,
      },
      offsetX: -10,
    },
    yaxis: {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: theme.palette.text.secondary,
        },
      },
    },
    xaxis: {
      type: 'datetime',
      min: min,
      max: max,
      labels: {
        show: true,
        style: {
          fontSize: '12px',
          colors: theme.palette.text.secondary,
        },
      },
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
          color: theme.palette.text.primary,
          height: 'auto',
          backgroundColor: isMobile
            ? 'transparent'
            : theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
          padding: isMobile ? '35px 0px 0px' : '35px 40px',
          '@media(max-width:480px)': {
            border: 'none',
          },
        }}
      >
        <CardHeader style={{ padding: 0 }} title={title} />
        <Typography
          variant="subtitle1"
          ml={0}
          style={{ fontWeight: 400, fontSize: '28px' }}
        >
          {value?.toLocaleString()}
        </Typography>

        <CardContent style={{ padding: 0 }}>
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
