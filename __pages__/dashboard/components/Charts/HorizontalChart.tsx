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
import { DAPP_LINKS } from 'utils/constants';
import styled, { useTheme } from 'styled-components';
import _ from 'lodash';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
import { ItemVV2, ItemHV2 } from 'theme/SharedStyling';
import { Text } from '../../dashboard.styled';

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
      events: {
        // dataPointMouseEnter: function (event) {
        //   event.path[0].style.cursor = 'pointer';
        // },
        xAxisLabelClick: function () {
          window.open(DAPP_LINKS.CHANNELS, '_blank');
        },
      },
    },
    plotOptions: {
      bar: {
        barHeight: '30%',
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
      tickAmount: 8,
      labels: {
        formatter: (value) => {
          if (value > 1000) {
            let dividend = parseInt(value / 1000);
            return dividend + 'K';
          }
          return value;
        },
        style: {
          fontSize: '12px',
          colors: theme.default.secondaryColor,
          cursor: 'pointer',
        },
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
          fontSize: '12px',
          colors: theme.default.secondaryColor,
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
      <CardContainer
        color={theme.default.color}
        alignItems="flex-start"
        height="auto"
        width="100%"
        background={isMobile ? 'transparent' : theme.default.cardBg}
        border={`1px solid ${theme.default.border}`}
        borderRadius="28px"
        padding={isMobile ? '35px 0px 0px' : '35px 40px'}
      >
        <Text weight={500} size="18px" color={theme.default.color}>
          {title}
        </Text>
        <ItemHV2 flex={1}>
          <ReactApexChart
            type="bar"
            series={options.series}
            options={options}
            height={300}
            width={500}
          />
        </ItemHV2>
      </CardContainer>
    </Grid>
  );
}

const CardContainer = styled(ItemVV2)`
  @media (max-width: 480px) {
    border: 'none';
  }
`;
