import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import BaseOptions from "../BaseOptions";
import { useTheme } from "@mui/material/styles";
import _ from "lodash";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function HorizontalChart({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  const theme = useTheme();

  const options = _.merge(BaseOptions(), {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380].reverse(),
        name: label,
      },
    ],
    chart: {
      type: "bar",
      height: 380,
    },
    plotOptions: {
      bar: {
        barHeight: "30%",
        borderRadius: 0.9,
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "#DF4FA3",
      "#AB7FEA",
      "#B477E4",
      "#C66BD3",
      "#C66BD3",
      "#D874D7",
      "#E479CC",
      "#F16CB3",
      "#F982AC",
      "#FF95A7",
    ],

    xaxis: {
      categories: [
        "Push Protocol",
        "Coindesk",
        "Snapshot",
        "MakerDAO",
        "Rekt",
        "Tollan Worlds",
        "CFI",
        "Earnifi-Crypto",
        "Banker",
        "Lens Protocol",
      ],
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
          height: "100%",
          backgroundColor: theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
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
