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
import { useTheme } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

export default function Topchannels() {
  const data = [
    {
      image: "/static/Clothing.png",
      name: "Lens Protocol",
      value: 100,
      trend: 10,
    },
    {
      image: "/static/Clothing.png",
      name: "Coinshots",
      value: 200,
      trend: 7.4,
    },
    { image: "/static/Clothing.png", name: "Aave", value: 300, trend: 3.2 },
    {
      image: "/static/Clothing.png",
      name: "Meet with Wallet",
      value: 200,
      trend: 7.5,
    },
    { image: "/static/Clothing.png", name: "Uniswap", value: 300, trend: 3.2 },
  ];
  const theme = useTheme();
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
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
                // fontSize: "14px",
                fontWeight: 600,
                paddingTop: "9px",
                paddingBottom: "9px",
              },
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    color: theme.palette.text.secondary,
                    fontSize: "14px",
                    fontWeight: 500,
                  },
                }}
              >
                <TableCell>Name</TableCell>
                <TableCell align="right">Subscribers</TableCell>
                <TableCell align="right">7D%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((channel) => (
                <TableRow
                  key={channel.name}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: "none",
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Avatar
                      src={channel.image}
                      sx={{ width: 26, height: 26, marginRight: 1 }}
                    />
                    <Box
                      component="span"
                      sx={{
                        display: "block",
                        width: "99px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {" "}
                      {channel.name}
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {channel.value}
                  </TableCell>
                  <TableCell align="right">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#30CC8B",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: "6.67px",
                          width: "10px",
                          marginRight: 0.5,
                        }}
                        alt="Trend."
                        src={"./static/increase.png"}
                      />
                      {channel.trend}%
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
}
