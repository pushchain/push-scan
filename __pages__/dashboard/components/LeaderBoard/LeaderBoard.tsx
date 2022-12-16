import React from 'react';
import {
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
import { ItemVV2, ItemHV2, ImageV2, SpanV2 } from 'theme/SharedStyling';
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
        paddingLeft="30px"
        paddingRight="30px"
        background={isMobile ? 'transparent' : theme.default.cardBg}
        border={`1px solid ${theme.default.border}`}
      >
        <Text weight={500} size="18px" color={theme.default.color}>
          {title}
        </Text>
        <ItemHV2>
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
                      <ItemHV2
                        justifyContent="flex-start"
                        color={
                          !isDarkMode
                            ? theme.default.color
                            : theme.default.secondaryColor
                        }
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
                      color: !isDarkMode
                        ? theme.default.color
                        : theme.default.secondaryColor,
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
                        paddingLeft="20px"
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
        </ItemHV2>
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

const TextContainer = styled(SpanV2)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
