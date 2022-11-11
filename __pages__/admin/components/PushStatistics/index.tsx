import {
  Grid,
  Card,
  CardHeader,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ReactECharts from "echarts-for-react";
import { useTheme } from "@mui/material/styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PushStatistics = ({ data, title, label, value }: any) => {
  const theme = useTheme();
  const isSmall = useMediaQuery("(max-width:480px)");

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
    const sum = getTotal(data);
    for (let key in data) {
      values.push({ value: ((data[key] / sum) * 100).toFixed(2), name: key });
    }

    return {
      tooltip: {
        trigger: "item",
      },
      legend: {
        show: isSmall ? false : true,
        orient: "vertical",
        left: "left",
        textStyle: {
          color: theme.palette.text.primary,
        },
      },
      color: [
        "#F9BFE0",
        "#F982AC",
        "#DF4FA3",
        "#AB7FEA",
        "#C66BD3",
        "#D874D7",
        "#E479CC",
        "#F16CB3",
      ],
      series: [
        {
          name: label,
          type: "pie",
          radius: ["40%", "70%"],
          center: isSmall ? ["50%", "50%"] : ["65%", "40%"],
          data: [...values],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          // label: {
          //   formatter: "{b}: ({d}%)",
          // },
        },
      ],
    };
  };

  return (
    <Grid
      sx={{ height: "400px", position: "relative" }}
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
        }}
      >
        <CardHeader
          title={title}
          style={{ marginBottom: value ? "0px" : "40px" }}
        />
        {value && (
          <Typography
            variant="subtitle1"
            ml={3}
            style={{ fontWeight: 400, fontSize: "28px" }}
          >
            ${value}
          </Typography>
        )}
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
          dir="ltr"
        >
          <ReactECharts
            style={{
              height: "75%",
              width: "100%",
            }}
            option={getDataPoints({ data, label })}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default PushStatistics;
