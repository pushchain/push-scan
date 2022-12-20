import React from 'react';
import { Grid, Card, useMediaQuery } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { useTheme } from 'styled-components';
import { ItemHV2 } from 'theme/SharedStyling';
import { Text } from '../../../dashboard/dashboard.styled';

const GovernanceGraph = ({ data, title, label, value, colorSet }: any) => {
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
        backgroundColor: theme.default.tooltipBackground,
        textStyle: {
          color: theme.default.color,
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
          color: theme.graph.legendText,
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
      color: colorSet,
      series: [
        {
          name: label,
          type: 'pie',
          radius: ['38%', '70%'],
          center: isMobile ? ['50%', '50%'] : ['62%', '40%'],
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
            color: theme.graph.primaryLabel,
            fontWeight: 500,
            rich: {
              a: {
                lineHeight: 15,
                color: theme.graph.primaryLabel,
              },
              b: {
                fontWeight: 500,
                color: theme.graph.secondaryLabel,
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
      sx={{ height: '450px', position: 'relative' }}
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
          backgroundColor: isMobile ? 'transparent' : theme.background.card,
          border: `1px solid ${theme.background.border}`,
          borderRadius: '28px',
          padding: isMobile ? '35px 0px 0px' : '28px 30px',
          boxShadow: 'none',
          '@media(max-width:480px)': {
            border: 'none',
          },
        }}
      >
        <Text
          weight={500}
          size="18px"
          color={theme.text.primary}
          marginBottom={value ? '5px' : isMobile ? '0px' : '45px'}
        >
          {title}
        </Text>
        {value && (
          <Text
            weight={500}
            size="28px"
            color={theme.text.primary}
            marginBottom={value ? '5px' : '0px'}
          >
            $ {value?.toLocaleString()}
          </Text>
        )}
        <ItemHV2 padding="0px" height="100%" width="100%">
          <ReactECharts
            style={{
              height: '100%',
              width: '100%',
            }}
            option={getDataPoints({ data, label })}
          />
        </ItemHV2>
      </Card>
    </Grid>
  );
};

export default GovernanceGraph;
