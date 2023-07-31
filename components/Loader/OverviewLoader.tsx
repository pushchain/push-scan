// React, NextJS imports
import React from 'react';

// External Library imports
import 'react-loading-skeleton/dist/skeleton.css';
import styled, { useTheme } from 'styled-components';
import { ItemVV2, Skeleton, SkeletonLine } from '../Reusables/SharedStyling';

// Internal Components imports
import { ThemeType } from '../../types/theme';

export const OverviewLoader = () => {
  const theme = useTheme() as ThemeType;

  return (
    <OverviewItem>
      <ItemVV2 alignItems="flex-start" justifyContent="center" gap="10px">
        <SkeletonLine width="80%" borderRadius="16px" height="12px" />
        <SkeletonLine width="100%" borderRadius="9px" height="26px" />
      </ItemVV2>

      <SkeletonLine width="60px" borderRadius="16px" height="60px" />
    </OverviewItem>
  );
};

export const OverviewItem = styled.div`
  border-radius: 28px;
  display: flex;
  flex: 1 1 0;
  justify-content: space-between;
  align-items: center;
  column-gap:10px;
  height: 114px;
  min-width: 285px;
  @media (max-width: 480px) {
    margin-bottom: 0px;
    width: 100%;
  }
`;
