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
import { useTheme } from 'styled-components';
import { DAPP_LINKS } from 'utils/constants';
import { useTheme as getTheme } from 'contexts/ThemeContext';
import { tableCellClasses } from '@mui/material/TableCell';
import { ItemVV2, ItemHV2 } from 'theme/SharedStyling';
import styled from 'styled-components';
import { Text } from '../../dashboard.styled';

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
  const { isDarkMode } = getTheme();
  return (
    <Grid item xs={12} md={4} lg={4} mb={isMobile ? 2 : 0}>
      <CardContainer
        padding={isMobile ? '30px 5px 0px' : '30px'}
        backgroundColor={isMobile ? 'transparent' : theme.default.cardBg}
        border={`1px solid ${theme.default.border}`}
      >
        {/* <CardHeader
          style={{
            fontWeight: 500,
            fontSize: '18px',
            padding: '0px',
            color: theme.default.color,
            // padding: isMobile ? '24px 0px 8px' : '24px 24px 0px',
          }}
          title={title}
        /> */}
        <Text weight={500} size="18px" color={theme.default.color}>
          {title}
        </Text>
        <CardContent style={{ padding: '0px' }}>
          {/* <CardContent style={{ padding: isMobile ? '0px' : '0px 24px 24px' }}> */}
          <Table
            sx={{
              width: '100%',
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
                // fontSize: "14px",
                fontFamily: 'Strawford,sans-serif',
                fontWeight: 500,
                padding: '0px',
                paddingTop: '18px',
                // paddingBottom: '9px',
              },
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  '& th': {
                    color: !isDarkMode ? '#657795' : '#787E99',
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
                  <TableCell component="th" scope="row">
                    <a
                      href={DAPP_LINKS.CHANNELS}
                      target={'_blank'}
                      rel={'noreferrer'}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          color: !isDarkMode
                            ? theme.default.color
                            : theme.default.secondaryColor,
                        }}
                      >
                        <Avatar
                          src={channel.icon}
                          sx={{ width: 26, height: 26, marginRight: 1 }}
                        />

                        <Box component="span">
                          {' '}
                          {isMobile && isTrending
                            ? channel.name.length < 15
                              ? channel.name
                              : channel.name.substr(0, 15) + '...'
                            : channel.name.length < 15
                            ? channel.name
                            : channel.name.substr(0, 15) + '...'}
                        </Box>
                      </Box>
                    </a>
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      color: !isDarkMode
                        ? theme.default.color
                        : theme.default.secondaryColor,
                    }}
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
                          color: channel?.trend >= 0 ? '#30CC8B' : '#E93636',
                          paddingLeft: '20px',
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
      </CardContainer>
    </Grid>
  );
}

const CardContainer = styled(ItemVV2)`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.default.border};
  border-radius: 28px;
  align-items: flex-start;
  @media (max-width: 480px) {
    border: none;
  }
`;
