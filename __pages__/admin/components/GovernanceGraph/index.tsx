import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '@mui/material/styles';

const GovernanceGraph = ({ data, title, label, value }: any) => {
  const theme = useTheme();
  // Checking whether screen is mobile screen
  const isMobile = useMediaQuery('(max-width:480px)');

  // Constructing data for chart
  const getTotal = (data: any) => {
    let total = 0;
    for (let value in data) {
      total += data[value];
    }
    return total;
  };
  const getDataPoints = ({ data, label }: any) => {
    let values = [];
    // const sum = getTotal(data);
    // ((data[key] / sum) * 100).toFixed(2)
    for (let key in data) {
      values.push({ value: data[key], name: key });
    }

    return {
      tooltip: {
        theme: 'dark',
        trigger: 'item',
        valueFormatter: (value: number) => value,
        backgroundColor: theme.palette.background.default,
        textStyle: {
          color: theme.palette.text.primary,
        },
        borderWidth: 0,
        borderRadius: 10,
      },
      legend: {
        show: isMobile ? false : true,
        orient: 'vertical',
        left: 'left',
        top: value ? 30 : 0,
        textStyle: {
          color: theme.palette.text.secondary,
          fontSize: 12,
          fontWeight: 500,
        },
        itemWidth: 15,
        itemHeight: 6,
        itemStyle: {
          borderRadius: 6,
        },
        icon: 'roundRect',
      },
      color: [
        '#CF1C84',
        '#F9BFE0',
        '#E479CC',
        '#AB7FEA',
        '#C66BD3',
        '#D874D7',
        '#E479CC',
        '#F16CB3',
      ],
      series: [
        {
          name: label,
          type: 'pie',
          radius: ['40%', '70%'],
          center: isMobile ? ['50%', '50%'] : ['65%', '40%'],
          data: [...values],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            show: true,
            // formatter: (value) =>
            //   `{a|${value?.name}}\n {b|${value?.value}}\t\t\t\t\t`,'{b}\n {d}%',
            formatter: '{a|{b}}\n {b|{d}%}\t\t\t\t',
            color: theme.palette.text.secondary,
            fontWeight: 500,
            rich: {
              a: {
                lineHeight: 10,
                color: theme.palette.text.secondary,
              },
              b: {
                fontWeight: 600,
                color: theme.palette.text.primary,
                lineHeight: 20,
              },
            },
          },
        },
      ],
    };
  };

  return (
    <Grid
      sx={{ height: '400px', position: 'relative' }}
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
    >
      <Card
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: isMobile
            ? 'transparent'
            : theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
          padding: isMobile ? '35px 0px 0px' : '25px 30px',
          '@media(max-width:480px)': {
            border: 'none',
          },
        }}
      >
        <CardHeader
          title={title}
          style={{
            padding: 0,
            marginBottom: value ? '0px' : !isMobile ? '40px' : '0px',
          }}
        />
        {value && (
          <Typography
            variant="subtitle1"
            style={{ fontWeight: 600, fontSize: '28px' }}
          >
            ${value.toLocaleString()}
          </Typography>
        )}
        <Box
          sx={{
            p: 0,
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
          dir="ltr"
        >
          <ReactECharts
            style={{
              height: '75%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            option={getDataPoints({ data, label })}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default GovernanceGraph;
