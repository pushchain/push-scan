import { Grid, Box, Typography } from "@mui/material";
import { OverviewItem } from "./overview.styled";
import { Text } from "../../dashboard.styled";
import HorizontalChart from "../HorizontalChart";

export default function OverViewSet() {
  const overViewData = [
    {
      image: "./static/push-integration.svg",
      title: "Push Integrations",
      value: 1234,
    },
    { image: "./static/chat-sent.svg", title: "Chat Sent", value: 1234 },
    { image: "./static/chat-user.svg", title: "Chat User", value: 1234 },
    { image: "./static/chat-request.svg", title: "Chat Request", value: 1234 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
      mt={5}
    >
      <Text size="18px">Overview</Text>
      <Grid container justifyContent="space-between" gap={3} mt={2} ml={0.01}>
        {overViewData.map((data) => (
          <OverviewItem key={data.title}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text size="18px">{data.title}</Text>
              <Text size="36px">{data.value}</Text>
            </Box>
            <Box
              component="img"
              src={data.image}
              sx={{ width: "60px", height: "60px" }}
            />
          </OverviewItem>
        ))}
      </Grid>
      <Grid container spacing={3} justifyContent="center" mt={0}>
        <HorizontalChart title="Notifications By Channel" />
        <HorizontalChart title="Subscribers By Channel" />
      </Grid>
    </Box>
  );
}
