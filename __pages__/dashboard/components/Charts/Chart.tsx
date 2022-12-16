import React, { useState } from 'react';
import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { useTheme } from 'styled-components';
import BaseOptions from '../BaseOptions';
import _ from 'lodash';
import CircularProgress from '@mui/material/CircularProgress';
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
  isLoading,
}: {
  title: string;
  value: number;
  label: string;
  max: any;
  min: any;
  data: any;
  isLoading: boolean;
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
          colors: theme.default.secondaryColor,
        },
      },
    },
    xaxis: {
      type: 'datetime',
      //min: min,
      // max: max,
      labels: {
        show: true,
        rotate: -45,
        hideOverlappingLabels: true,
        style: {
          fontSize: '12px',
          colors: theme.default.secondaryColor,
        },
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM',
          day: 'dd MMM',
          hour: 'HH:mm',
        },
        // formatter: (value) => {
        //   //const d = new Date(new Date(value)).toISOString();
        //   const d = moment(new Date(value)).format('DD-MMM-YY');
        //   return d;
        // },
      },
      // labels: {
      //   formatter: function (value) {
      //     return new Date(value);
      //   },
      // },
      // tickAmount: 7,
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
          color: theme.default.color,
          height: 'auto',
          backgroundColor: isMobile ? 'transparent' : theme.default.cardBg,
          border: `1px solid ${theme.default.border}`,
          borderRadius: '28px',
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

        <CardContent
          style={{
            padding: 0,
            height: '250px',
          }}
        >
          {isLoading ? (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <ReactApexChart
              type="area"
              series={options?.series}
              options={options}
              height={250}
            />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
