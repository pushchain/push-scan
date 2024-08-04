// React, NextJS imports
import React from 'react';

// External Library imports
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled, { useTheme } from 'styled-components';
import { Grid } from '@mui/material';

// Internal Components imports
import { ItemVV2, ItemHV2 } from '../Reusables/SharedStyling';
import { DashBoardContainer } from '../Reusables/SharedStyling';
import { ThemeType } from '../../types/theme';

export const HomeLoader = () => {
  const theme = useTheme() as ThemeType;

  return (
    <SkeletonTheme
      baseColor={theme?.background?.secondary}
      highlightColor={theme?.background?.default}
    >
      <DashBoardContainer>
        
      </DashBoardContainer>
    </SkeletonTheme>
  );
};