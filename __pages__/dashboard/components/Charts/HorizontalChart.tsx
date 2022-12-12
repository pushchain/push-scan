import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  useMediaQuery,
} from '@mui/material';
import dynamic from 'next/dynamic';
import BaseOptions from '../BaseOptions';
import { useTheme } from '@mui/material/styles';
import _ from 'lodash';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function HorizontalChart({
  title,
  label,
  category,
  value,
}: {
  title: string;
  label: string;
  category: string[];
  value: number[];
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:480px)');

  const options = _.merge(BaseOptions(), {
    series: [
      {
        data: value,
        name: label,
      },
    ],
    chart: {
      type: 'bar',
      height: 380,
    },
    plotOptions: {
      bar: {
        barHeight: '25%',
        borderRadius: 2.5,
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    colors: [
      '#DF4FA3',
      '#AB7FEA',
      '#B477E4',
      '#C66BD3',
      '#C66BD3',
      '#D874D7',
      '#E479CC',
      '#F16CB3',
      '#F982AC',
      '#FF95A7',
    ],

    xaxis: {
      categories: category,
      axisBorder: {
        show: true,
      },
      style: {
        fontSize: '12px',
        colors: ['#657795', '#657795'],
      },
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (value) {
          const editedValue = isMobile
            ? value.length > 8
              ? value.substr(0, 6) + '...'
              : value
            : value.length > 15
            ? value.substr(0, 12) + '...'
            : value;
          return editedValue;
        },
        style: {
          colors: ['#657795', '#657795'],
          fontSize: '12px',
        },
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    // stroke: {
    //   width: 6,
    //   curve: 'straight',
    // },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
  });

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <Card
        sx={{
          height: '100%',
          backgroundColor: isMobile
            ? 'transparent'
            : theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
          '@media(max-width:480px)': {
            border: 'none',
          },
        }}
      >
        <CardHeader title={title} />
        <CardContent style={{ padding: isMobile ? '0px' : '0px 24px' }}>
          <ReactApexChart
            type="bar"
            series={options.series}
            options={options}
            // height={250}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
