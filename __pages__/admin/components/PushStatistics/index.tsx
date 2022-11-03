import { Grid, Card, CardHeader, Box } from "@mui/material";
import ReactECharts from "echarts-for-react";

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

const PushStatistics = ({ data, title, label }: any) => {
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
        orient: "horizontal",
        left: "left",
        // textStyle: {
        //   color: "white",
        // },
      },
      series: [
        {
          name: label,
          type: "pie",
          radius: "50%",
          data: [...values],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
  };

  return (
    <Grid
      sx={{ height: "500px", position: "relative" }}
      item
      xs={12}
      md={4}
      lg={4}
    >
      <Card sx={{ height: "100%" }}>
        <CardHeader title={title} />
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
            style={{ height: "80%", width: "100%" }}
            option={getDataPoints({ data, label })}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default PushStatistics;
