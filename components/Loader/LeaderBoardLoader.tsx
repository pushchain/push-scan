// React, NextJS imports
import React from 'react';

// External Library imports
import 'react-loading-skeleton/dist/skeleton.css';
import styled, { useTheme } from 'styled-components';
import { useMediaQuery } from '@mui/material';
import { ItemHV2, ItemVV2, SkeletonLine } from '../Reusables/SharedStyling';

// Internal Components imports
import { ThemeType } from '../../types/theme';

export const LeaderboardLoader = ({ isTrending }) => {
  const theme = useTheme() as ThemeType;
  const isMobile = useMediaQuery('(max-width:480px)');

  return (
    <CardContainer
      padding={isMobile ? '30px 5px 0px' : '30px'}
      background={isMobile ? 'transparent' : theme.background.card}
      border={`1px solid ${theme.background.border}`}
    >
      <SkeletonLine
        width="70%"
        borderRadius="16px"
        height="12px"
        margin="12px 10px 12px 0px"
      />
      <TableContainer>
        <GridContainer gridStructure={isTrending ? '7fr 4fr 3fr' : '7fr 3fr'} gap="12px">
          <SkeletonLine
            width="85%"
            borderRadius="16px"
            height="12px"
            margin="12px 10px 12px 0px"
          />
          <SkeletonLine
            width="100%"
            borderRadius="16px"
            height="12px"
            margin="12px 0px"
          />
          {isTrending && (
            <SkeletonLine
              width="100%"
              borderRadius="16px"
              height="12px"
              margin="12px 0px"
            />
          )}
        </GridContainer>
        {Array(5)
          .fill(0)
          .map((value, index) => {
            return (
              <GridContainer
                gridStructure={isTrending ? '7fr 4fr 3fr' : '7fr 3fr'}
                key={index}
                gap="12px"
              >
                <ItemHV2 justifyContent="flex-start">
                  <SkeletonLine
                    width="26px"
                    borderRadius="26px"
                    height="26px"
                  />
                  <SkeletonLine
                    width="70%"
                    borderRadius="16px"
                    height="12px"
                    margin="12px 10px 12px 3px"
                  />
                </ItemHV2>
                <SkeletonLine
                  width="100%"
                  borderRadius="16px"
                  height="12px"
                  margin="12px 0px"
                />
                {isTrending && (
                  <SkeletonLine
                    width="100%"
                    borderRadius="16px"
                    height="12px"
                    margin="12px 0px"
                  />
                )}
              </GridContainer>
            );
          })}
      </TableContainer>
    </CardContainer>
  );
};

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) => props.gridStructure || '6fr 2fr 2fr'};
  gap: ${(props) => props.gap || '0px'};
  justify-content:left;
`;
