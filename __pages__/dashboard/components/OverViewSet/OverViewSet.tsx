import { Grid, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
      }}
      mt={5}
    >
      <Text size="18px">Overview</Text>
      <Grid container gap={3} justifyContent="center" mt={2} width="100%">
        {overViewData.map((data) => (
          <OverviewItem
            key={data.title}
            style={{
              backgroundColor: theme.palette.background.card,
              border: `1px solid ${theme.palette.outline}`,
            }}
          >
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
