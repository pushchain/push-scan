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
import styled, { useTheme } from 'styled-components';
import BaseOptions from '../BaseOptions';
import _ from 'lodash';
import CircularProgress from '@mui/material/CircularProgress';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
import { ItemVV2, ItemHV2 } from 'theme/SharedStyling';
import { Text } from '../../dashboard.styled';

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
      fontFamily: 'Strawford, Helvetica, sans-serif',
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
          fontFamily: 'Strawford, Helvetica, sans-serif',
          colors: theme.graph.primaryLabel,
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
          fontFamily: 'Strawford, Helvetica, sans-serif',
          colors: theme.graph.primaryLabel,
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

  // color={theme.default.color}
  // alignItems="flex-start"
  // height="auto"
  // width="100%"
  // background={isMobile ? 'transparent' : theme.default.cardBg}
  // border={`1px solid ${theme.default.border}`}
  // borderRadius="28px"
  // padding={isMobile ? '35px 0px 0px' : '35px 40px'}
  return (
    <Grid item xs={12} md={6} lg={6}>
      <CardContainer
        color={theme.text.primary}
        alignItems="flex-start"
        justifyContent="flex-start"
        height="auto"
        width="100%"
        background={isMobile ? 'transparent' : theme.background.card}
        border={`1px solid ${theme.background.border}`}
        borderRadius="28px"
        minHeight="364px"
        padding={isMobile ? '35px 0px 0px' : '30px 30px 6px'}
      >
        <Text weight={500} size="18px" color={theme.text.primary}>
          {title}
        </Text>
        <Text weight={500} size="28px" color={theme.text.primary}>
          {value?.toLocaleString()}
        </Text>

        <CardContent
          sx={{
            width: '100%',
            height: '100%',
            padding: '0px',
          }}
        >
          {isLoading ? (
            <ItemHV2 height="265px" width="100%">
              <CircularProgress />
            </ItemHV2>
          ) : (
            <ReactApexChart
              type="area"
              series={options?.series}
              options={options}
              height={250}
            />
          )}
        </CardContent>
      </CardContainer>
    </Grid>
  );
}

const CardContainer = styled(ItemVV2)`
  @media (max-width: 480px) {
    border: none;
  }
`;
