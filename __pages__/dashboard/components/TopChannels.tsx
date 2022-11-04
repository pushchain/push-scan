import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";

export default function Topchannels() {
  const data = [
    { image: "/static/push.svg", name: "Channel1", value: 100 },
    { image: "/static/push.svg", name: "Channel2", value: 200 },
    { image: "/static/push.svg", name: "Channel3", value: 300 },
  ];
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Card sx={{ height: "100%" }}>
        <CardHeader title="Top Channels" />
        <CardContent>
          {data?.map((channel, index) => {
            return (
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  height: "100%",
                  width: "100%",
                }}
                dir="ltr"
                key={index}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h5" mr={1}>
                    {index + 1}.
                  </Typography>
                  <Avatar
                    src={channel.image}
                    sx={{ width: "26px", height: "26px" }}
                  />
                  <Typography variant="h5">{channel.name}</Typography>
                </Box>
                <Typography variant="h5">{channel.value}</Typography>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </Grid>
  );
}
