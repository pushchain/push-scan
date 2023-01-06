// React, NextJS imports
import React from 'react';

// External Library imports
import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  useMediaQuery,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import styled, { useTheme } from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

// Internal Components imports
import { DAPP_LINKS } from '../../../../utils/constants';
import { useTheme as getTheme } from '../../../../contexts/ThemeContext';
import {
  ItemVV2,
  ItemHV2,
  ImageV2,
  SpanV2,
} from '../../../../components/SharedStyling';
import { Text } from '../../dashboard.styled';

export default function LeaderBoard({
  title,
  data,
  isTrending,
  isLoading,
}: {
  title: string;
  data: any;
  isTrending?: boolean;
  isLoading?: boolean;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:480px)');
  const { isDarkMode } = getTheme();
  return (
    <Grid item xs={12} md={4} lg={4} mb={isMobile ? 2 : 0}>
      <CardContainer
        padding={isMobile ? '30px 5px 0px' : '30px'}
        background={isMobile ? 'transparent' : theme.background.card}
        border={`1px solid ${theme.background.border}`}
      >
        <Text weight={500} size="18px" color={theme.text.primary}>
          {title}
        </Text>
        <ItemHV2>
          {isLoading ? (
            <ItemHV2 minHeight="262px" minWidth="300px">
              <RotatingLines
                strokeColor="#CF1C84"
                strokeWidth="4"
                animationDuration="1.9"
                width="50"
                visible={true}
              />
            </ItemHV2>
          ) : (
            <Table
              sx={{
                width: '100%',
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: 'none',
                  // fontSize: "14px",
                  fontFamily: 'Strawford, sans-serif',
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
                      color: theme.text.leaderboardHeader,
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
                        <ItemHV2
                          justifyContent="flex-start"
                          color={theme.text.leaderboardText}
                        >
                          <Avatar
                            src={channel.icon}
                            sx={{ width: 26, height: 26, marginRight: 1 }}
                          />

                          <TextContainer>
                            {' '}
                            {isMobile && isTrending
                              ? channel.name.length < 15
                                ? channel.name
                                : channel.name.substr(0, 15) + '...'
                              : channel.name.length < 15
                              ? channel.name
                              : channel.name.substr(0, 15) + '...'}
                          </TextContainer>
                        </ItemHV2>
                      </a>
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        color: theme.text.leaderboardText,
                      }}
                    >
                      {channel?.subscriber?.toLocaleString()}
                    </TableCell>
                    {isTrending && (
                      <TableCell align="right">
                        <ItemHV2
                          alignItems="center"
                          justifyContent="flex-end"
                          color={channel?.trend >= 0 ? '#30CC8B' : '#E93636'}
                          padding="0px 0px 0px 30px"
                        >
                          <ImageV2
                            height="6.67px"
                            width="10px"
                            marginRight="4px"
                            alt="Trend."
                            src={
                              channel?.trend >= 0
                                ? './static/increase.png'
                                : './static/decrease.png'
                            }
                          />
                          {channel?.trend}%
                        </ItemHV2>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </ItemHV2>
      </CardContainer>
    </Grid>
  );
}

const CardContainer = styled(ItemVV2)`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.background.border};
  border-radius: 28px;
  align-items: flex-start;
  @media (max-width: 480px) {
    border: none;
  }
`;

const TextContainer = styled(SpanV2)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
