import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import axios from "axios";
// import ReactApexChart from "react-apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import dayjs from "dayjs";
import _ from "lodash";
import { useTheme } from "@mui/material";
import BaseOptions from "./BaseOptions";

const convertDataValueToArray = (data: number[]) => Object.values(data);

export default function LineChart({ title }: { title: string }) {
  const theme = useTheme();

  const [push, setPush] = useState<number[]>([]);
  const [btc, setBtc] = useState<number[]>([]);
  const [converted, setConverted] = useState<number[]>([]);
  const time = 10;
  //   let base = +new Date(1968, 9, 3);
  //   let oneDay = 24 * 3600 * 1000;
  //   let date = [];
  //   let data = [Math.random() * 300];
  //   for (let i = 1; i < 20000; i++) {
  //     var now = new Date((base += oneDay));
  //     date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  //     data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  //   }

  //   const dates = [...Array(7)].map((_, i) => {
  //     const d = new Date();
  //     d.setDate(d.getDate() - i * 7);

  //     return d.toISOString();
  //   });

  const formattedDates = [...Array(time)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i * time);

    return dayjs(d.toISOString()).format("D MMM");
  });

  useEffect(() => {
    (async () => {
      try {
        const pushResponse = await axios.post(
          `https://api.analytics.epns.io/apis/analytics/get_push_btc_price`
        );
        setPush(convertDataValueToArray(pushResponse.data.push).slice(-time));
        setBtc(convertDataValueToArray(pushResponse.data.btc).slice(-time));
      } catch (e) {
        console.log("Error ocured");
      }
    })();

    return () => {
      setPush([]);
      setBtc([]);
    };
  }, []);

  useEffect(() => {
    setConverted([]);
    for (let i = 0; i < time; i += 1) {
      const btcToSatoshi = btc[i] * 0.00000001;
      const final = push[i] / btcToSatoshi;
      setConverted((prev: any) => [...prev, final]);
    }
  }, [btc]);

  const chartData = [
    {
      name: "Satoshi",
      type: "line",
      fill: "solid",
      color: "#E52F71",
      data: converted,
    },
  ];

  const chartOptions = _.merge(BaseOptions(), {
    xaxis: {
      type: "datetime",
      categories: _.reverse(formattedDates),
      // axisTicks: {
      //   show: true,
      // },
      // tooltip: {
      //   enabled: false,
      // },
      // labels: {
      //   show: true,
      //   rotate: -60,
      //   hideOverlappingLabels: true,
      //   style: {
      //     colors: "#E52F71",
      //   },
      // },
    },
    yaxis: {
      seriesName: "Comparision",
      min: Math.min(...converted),
      max: Math.max(...converted),
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      labels: {
        // style: {
        //   colors: "#E52F71",
        // },
        formatter: (value: any) => parseInt(value, 10),
      },
      title: {
        style: {
          color: "#E52F71",
        },
      },
      // tooltip: {
      //   enabled: false,
      // },
    },
    // grid: {
    //   strokeDashArray: 3,
    //   borderColor: theme.palette.divider,
    // },
    // chart: {
    //   toolbar: {
    //     show: true,
    //   },
    //   zoom: {
    //     enabled: true,
    //     type: "x",
    //     autoScaleYaxis: false,
    //     zoomedArea: {
    //       fill: {
    //         color: "#90CAF9",
    //         opacity: 0.4,
    //       },
    //     },
    //   },
    // },
    // stroke: {
    //   show: true,
    //   curve: "smooth",
    //   lineCap: "butt",
    //   colors: undefined,
    //   width: 2,
    //   dashArray: 0,
    // },
    // states: {
    //   hover: {
    //     filter: {
    //       type: "lighten",
    //       value: 0.04,
    //     },
    //   },
    //   active: {
    //     filter: {
    //       type: "darken",
    //       value: 0.88,
    //     },
    //   },
    // },
  });

  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card sx={{ height: "100%", borderRadius: "0px" }}>
        <CardHeader title={title} />
        <CardContent>
          <button>1M</button>
          <button>6M</button>
          <button>1Y</button>
          <button>ALL</button>
          <ReactApexChart
            type="line"
            series={chartData}
            options={chartOptions}
            height={300}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
