import { Grid, Card, CardHeader, Box, Modal } from "@mui/material";
import ReactECharts from "echarts-for-react";
import useModal from "hooks/useModal";
import { useEffect, useState } from "react";
import { StyledEditIcon } from "../../admin.styled";
import FormDialog from "./editModal";

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
        name: "Access From",
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
  { value: 0, name: "Extensions" },
  { value: 0, name: "Dapp" },
  { value: 0, name: "Mobile" },
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

const ApplicationStatistics = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { open, handleOpen, handleClose } = useModal();

  useEffect(() => {
    // const dataPoints = getDataPoints()
    const dataPoints = { extensions: 10, dapp: 25, mobile: 40 };
    setState([
      { value: dataPoints.extensions, name: "Extensions" },
      { value: dataPoints.dapp, name: "Dapp" },
      { value: dataPoints.mobile, name: "Mobile" },
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
        <CardHeader title={`Application Usage Statistics`} />
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
      <StyledEditIcon onClick={handleOpen} />
      <FormDialog open={open} handleClose={handleClose} />
    </Grid>
  );
};

export default ApplicationStatistics;
