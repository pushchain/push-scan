import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Grid,
  Avatar,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

export default function NewChannels() {
  const data = [
    { image: "/static/Clothing.png", name: "Channel1", value: 100, trend: 10 },
    { image: "/static/Clothing.png", name: "Channel2", value: 200, trend: 7 },
    { image: "/static/Clothing.png", name: "Channel3", value: 300, trend: 3 },
    { image: "/static/Clothing.png", name: "Channel2", value: 200, trend: 7 },
    { image: "/static/Clothing.png", name: "Channel3", value: 300, trend: 3 },
  ];

  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: "transparent",
          border: " 1px solid #BAC4D6",
        }}
      >
        <CardHeader
          title="Trending"
          sx={{ fontWeight: 500, fontSize: "18px", marginLeft: 2 }}
        />
        <CardContent style={{ paddingTop: "0px" }}>
          <Table
            sx={{
              width: "100%",
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
                fontSize: "14px",
                fontWeight: 600,
                paddingTop: "9px",
                paddingBottom: "9px",
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    color: "#657795",
                    fontSize: "12px",
                    fontWeight: 500,
                  },
                }}
              >
                <TableCell>Name</TableCell>
                <TableCell align="right">Subscribers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((channel, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Avatar
                      src={channel.image}
                      sx={{ width: 26, height: 26, marginRight: 1 }}
                    />
                    {channel.name}
                  </TableCell>
                  <TableCell align="right">{channel.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
}
