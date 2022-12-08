import React from 'react';
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
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

export default function LeaderBoard({
  title,
  data,
  isTrending,
}: {
  title: string;
  data: any;
  isTrending?: boolean;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <Grid item xs={12} md={4} lg={4} mb={isMobile ? 2 : 0}>
      <Card
        sx={{
          height: '100%',
          backgroundColor: isMobile
            ? 'transparent'
            : theme.palette.background.card,
          border: `1px solid ${theme.palette.outline}`,
          '@media(max-width:480px)': {
            // borderWidth: '0px 0px 1px 0px',
            // borderColor: '#E6E7EC',
            // borderStyle: 'solid',
            // borderRadius: 0,
            border: 'none',
          },
        }}
      >
        <CardHeader
          title={title}
          sx={{
            fontWeight: 500,
            fontSize: '18px',
            padding: isMobile ? '24px 0px 8px' : '24px 24px 0px',
          }}
        />
        {/* <CardContent style={{ paddingTop: '0px' }}></CardContent> */}
        <CardContent style={{ padding: isMobile ? '0px' : '0px 24px 24px' }}>
          <Table
            sx={{
              width: '100%',
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
                // fontSize: "14px",
                fontWeight: 600,
                padding: '0px',
                paddingTop: '9px',
                paddingBottom: '9px',
              },
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  '& th': {
                    color: theme.palette.text.disabled,
                    fontSize: '12px',
                  },
                }}
              >
                <TableCell>Name</TableCell>
                <TableCell align="right">Subscribers</TableCell>
                {isTrending && <TableCell align="right">7D%</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((channel) => (
                <TableRow
                  key={channel.name}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 'none',
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: 'flex',
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Avatar
                      src={channel.icon}
                      sx={{ width: 26, height: 26, marginRight: 1 }}
                    />
                    <Box component="span">
                      {' '}
                      {isMobile && isTrending
                        ? channel.name.length < 8
                          ? channel.name
                          : channel.name.substr(0, 8) + '...'
                        : channel.name.length < 10
                        ? channel.name
                        : channel.name.substr(0, 10) + '...'}
                    </Box>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {channel?.subscriber?.toLocaleString()}
                  </TableCell>
                  {isTrending && (
                    <TableCell align="right">
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          color: '#30CC8B',
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: '6.67px',
                            width: '10px',
                            marginRight: 0.5,
                          }}
                          alt="Trend."
                          src={
                            channel?.trend >= 0
                              ? './static/increase.png'
                              : './static/decrease.png'
                          }
                        />
                        {channel?.trend}%
                      </Box>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>
  );
}
