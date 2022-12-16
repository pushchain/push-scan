import { useTheme } from 'styled-components';
import { useTheme as Theme } from 'contexts/ThemeContext';

export default function BaseOptions() {
  const theme = useTheme();
  const { isDarkMode } = Theme();

  // const LABEL_TOTAL = {
  //   show: true,
  //   label: "Total",
  //   color: theme.palette.text.secondary,
  //   ...theme.typography.subtitle2,
  // };

  // const LABEL_VALUE = {
  //   offsetY: 8,
  //   color: theme.palette.text.primary,
  //   ...theme.typography.h3,
  // };

  return {
    // Colors
    // colors: [
    //   theme.palette.primary.main,
    //   theme.palette.chart.yellow[0],
    //   theme.palette.chart.blue[0],
    //   theme.palette.chart.violet[0],
    //   theme.palette.chart.green[0],
    //   theme.palette.chart.red[0],
    // ],

    // Chart
    chart: {
      toolbar: {
        show: false,
        tools: {
          download: false,
          pan: false,
          zoomin: false,
          zoomout: false,
        },
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: false,
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4,
          },
        },
      },

      // animations: { enabled: false },
      foreColor: theme.default.leaderBoardHeader,
      //fontFamily: theme.typography.fontFamily,
    },

    // States
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // Datalabels
    dataLabels: { enabled: false },

    // Stroke
    stroke: {
      width: 2,
      curve: 'straight',
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      borderColor: theme.default.secondaryColor, // need to find out
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: true },
      axisTicks: { show: true },
      tooltip: {
        enabled: false,
      },
      // forceNiceScale: true,
      // tickAmount: 2,
    },

    // Markers
    markers: {
      size: 0,
      strokeColors: theme.default.timeFilterBg,
    },

    // Tooltip
    tooltip: {
      theme: isDarkMode ? 'dark' : 'light',
      x: {
        show: true,
        format: 'dd MMM yyyy',
      },
      borderRadius: 10,
    },

    // Legend
    legend: {
      show: true,
      fontSize: 13,
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        colors: theme.default.color,
      },
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        columnWidth: '28%',
        borderRadius: 10,
      },
      // Pie + Donut
      pie: {
        donut: {
          // labels: {
          //   show: true,
          //   value: LABEL_VALUE,
          //   total: LABEL_TOTAL,
          // },
        },
      },
      // Radialbar
      radialBar: {
        track: {
          strokeWidth: '100%',
          //   background: theme.palette.grey[500_16],
        },
        // dataLabels: {
        //   value: LABEL_VALUE,
        //   total: LABEL_TOTAL,
        // },
      },
      // Radar
      radar: {
        polygons: {
          fill: { colors: ['transparent'] },
          strokeColors: theme.default.secondaryColor, // check
          connectorColors: theme.default.secondaryColor, //check
        },
      },
      // polarArea
      polarArea: {
        rings: {
          strokeColor: theme.default.secondaryColor, //check
        },
        spokes: {
          connectorColors: theme.default.secondaryColor, //check
        },
      },
    },

    // Responsive
    // responsive: [
    //   {
    //     // sm
    //     breakpoint: theme.breakpoints.values.sm,
    //     options: {
    //       plotOptions: { bar: { columnWidth: '40%' } },
    //     },
    //   },
    //   {
    //     // md
    //     breakpoint: theme.breakpoints.values.md,
    //     options: {
    //       plotOptions: { bar: { columnWidth: '32%' } },
    //     },
    //   },
    // ],
  };
}
