import { Grid, Card, CardHeader, Box } from "@mui/material";
import ReactECharts from "echarts-for-react";
import useModal from "hooks/useModal";
import { useEffect, useState } from "react";

const getDataPoints = (data: any) => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Category",
        type: "pie",
        radius: "50%",
        data: [...data],
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

const INITIAL_STATE = [
  { value: 0, name: "Defi" },
  { value: 0, name: "NFT" },
  { value: 0, name: "DAO" },
  { value: 0, name: "Tooling" },
  { value: 0, name: "Marketing" },
  { value: 0, name: "Educational" },
  { value: 0, name: "Gaming" },
  { value: 0, name: "Others" },
];

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

const PGP_Categories = () => {
  const [state, setState] = useState(INITIAL_STATE);
  useEffect(() => {
    // const dataPoints = getDataPoints()
    const dataPoints = {
      defi: 18,
      nft: 12,
      dao: 10,
      tooling: 10,
      marketing: 15,
      educational: 10,
      gaming: 10,
      other: 15,
    };
    setState([
      { value: dataPoints.defi, name: "Defi" },
      { value: dataPoints.nft, name: "NFT" },
      { value: dataPoints.dao, name: "DAO" },
      { value: dataPoints.tooling, name: "Tooling" },
      { value: dataPoints.marketing, name: "Marketing" },
      { value: dataPoints.educational, name: "Educational" },
      { value: dataPoints.gaming, name: "Gaming" },
      { value: dataPoints.other, name: "Others" },
    ]);
  }, []);

  return (
    <Grid
      sx={{ height: "500px", position: "relative" }}
      item
      xs={12}
      md={6}
      lg={6}
    >
      <Card sx={{ height: "100%" }}>
        <CardHeader title={`PGP Categories`} />
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
            option={getDataPoints(state)}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default PGP_Categories;
