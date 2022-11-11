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

export default function NewChannels() {
  const data = [
    {
      image: "/static/Clothing.png",
      name: "Lens Protocol",
      value: 100,
      trend: 10,
    },
    { image: "/static/Clothing.png", name: "CoinShots", value: 200, trend: 7 },
    { image: "/static/Clothing.png", name: "Aave", value: 300, trend: 3 },
    {
      image: "/static/Clothing.png",
      name: "Meet with Wallet",
      value: 200,
      trend: 7,
    },
    { image: "/static/Clothing.png", name: "Uniswap", value: 300, trend: 3 },
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
          title="Top Channels by Susbriber Count"
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
                    color: theme.palette.text.disabled,
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
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                        textAlign: "left",
                        width: "173px",
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
}
