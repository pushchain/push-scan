import { Card, CardContent, CardHeader, Grid } from '@mui/material';
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
        barHeight: '30%',
        borderRadius: 0.9,
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
    },
    yaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
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
          backgroundColor: theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
          '@media(max-width:480px)': {
            border: 'none',
          },
        }}
      >
        <CardHeader title={title} />
        <CardContent>
          <ReactApexChart
            type="bar"
            series={options.series}
            options={options}
            height={250}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
