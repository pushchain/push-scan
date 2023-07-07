// React, NextJS imports
import React from 'react';

// External Library imports
import { Avatar, Grid, useMediaQuery } from '@mui/material';
import styled, { useTheme } from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

// Internal Components imports
import { DAPP_LINKS } from '../../../utils/constants';
import {
  ItemVV2,
  ItemHV2,
  ImageV2,
  SpanV2
} from '../SharedStyling';
import { Text } from '../SharedStyling';
import { ThemeType } from '../../../types/theme';

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
  const theme = useTheme() as ThemeType;
  const isMobile = useMediaQuery('(max-width:480px)');
  const isXSmall = useMediaQuery('(min-width:1200px)');
  const isSmall = useMediaQuery('(max-width:1400px)');
  const getChannelName = (name: string) => {
    const trimmedName =
      (isMobile && isTrending) || (isSmall && isXSmall && isTrending)
        ? name.length > 13
          ? name.substr(0, 10) + '...'
          : name
        : name;
    return trimmedName;
  };

  return (
    <Grid item xs={12} md={12} lg={4} mb={isMobile ? 2 : 0}>
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
            <TableContainer>
              <GridContainer
                gridStructure={isTrending ? '7fr 4fr 5.5fr' : '7fr 3fr'}
              >
                <TableHeaderCell justifyContent="flex-start">
                  Name
                </TableHeaderCell>
                <TableHeaderCell>Subscribers</TableHeaderCell>
                {isTrending && <TableHeaderCell>Trend</TableHeaderCell>}
              </GridContainer>
              {data.map((channel, index) => (
                <GridContainer
                  gridStructure={isTrending ? '7fr 4fr 5.5fr' : '7fr 3fr'}
                  key={index}
                >
                  <ContentCell justifyContent="flex-start">
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
                          alt={channel.name}
                          sx={{
                            width: 26,
                            height: 26,
                            marginRight: 1,
                            cursor: 'pointer',
                          }}
                        />
                      </ItemHV2>
                    </a>
                    <TooltipContainer>
                      <TextContainer>
                        {getChannelName(channel?.name)}
                      </TextContainer>
                      <Tooltip>{channel?.name}</Tooltip>
                    </TooltipContainer>
                  </ContentCell>

                  <ContentCell>
                    {channel?.subscriber?.toLocaleString()}
                  </ContentCell>
                  {isTrending && (
                    <ContentCell>
                      <ItemHV2
                        alignItems="center"
                        justifyContent="flex-end"
                        color={channel?.trend >= 0 ? '#30CC8B' : '#E93636'}
                        padding="0px 0px 0px 30px"
                        fontSize="15px"
                      >
                        <ImageV2
                          height="6.67px"
                          width="10px"
                          marginRight="4px"
                          alt="Trend"
                          src={
                            channel?.trend >= 0
                              ? './static/increase.png'
                              : './static/decrease.png'
                          }
                        />
                        {channel?.trend}%
                      </ItemHV2>
                    </ContentCell>
                  )}
                </GridContainer>
              ))}
            </TableContainer>
          )}
        </ItemHV2>
      </CardContainer>
    </Grid>
  );
}

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) => props.gridStructure || '6fr 2fr 2fr'};
  position: relative;
`;

const TableHeaderCell = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-end'};
  color: ${({ theme }) => theme.text.leaderboardHeader};
  font-size: 13px;
  margin-top: 18px;
`;

const ContentCell = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-end'};
  align-items: center;
  margin-top: 18px;
  color: ${({ theme }) => theme.text.leaderboardText};
  font-size: 15px;
  z-index: 0;
  width: 100%;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

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
  cursor: pointer;
`;

const Tooltip = styled.div`
  position: absolute;
  z-index:1;
  min-width: 140px;
  bottom: 14px;
  left: 80%;
  display: none;
  border-radius: 10px 10px 10px 0px;
  border: 1px solid ${(props) => props.theme.background.border};
  padding: 5px 10px;
  background: ${(props) => props.theme.background.tooltip};
`;

const TooltipContainer = styled.div`
  position: absolute;
  left: 33px;
  & ${TextContainer}:hover + ${Tooltip} {
    display: flex;
  }
`;
