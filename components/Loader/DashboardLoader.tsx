// React, NextJS imports
import React from 'react';

// External Library imports
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled, { useTheme } from 'styled-components';
import { Grid } from '@mui/material';

// Internal Components imports
import style from '../../styles/style.module.css';
import { ItemVV2, ItemHV2 } from '../Reusables/SharedStyling';
import { DashBoardContainer } from '../Reusables/SharedStyling';
import { ThemeType } from '../../types/theme';

export const DashboardLoader = () => {
  const theme = useTheme() as ThemeType;

  return (
    <SkeletonTheme
      baseColor={theme?.background?.secondary}
      highlightColor={theme?.background?.default}
    >
      <DashBoardContainer>
        <Skeleton
          width="100%"
          borderRadius={20}
          height="15px"
          containerClassName={style.flex}
        />
        <ItemVV2 width="100%" margin={'50px 0px 0px'} alignItems="flex-start">
          <ItemHV2
            width="100%"
            gap="32px"
            justifyContent="space-between"
            marginTop="20px"
          >
            <Skeleton
              width="100%"
              borderRadius={28}
              height="114px"
              containerClassName={style.flex}
            />
            <Skeleton
              width="100%"
              borderRadius={28}
              height="114px"
              containerClassName={style.flex}
            />
            <Skeleton
              width="100%"
              borderRadius={28}
              height="114px"
              containerClassName={style.flex}
            />
          </ItemHV2>
        </ItemVV2>
        <Grid container spacing={2} justifyContent="center" mt={2}>
          <Grid item xs={12} md={12} lg={4} mb={0}>
            <Skeleton
              width="100%"
              borderRadius={28}
              height="336px"
              containerClassName={style.flex}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4} mb={0}>
            <Skeleton
              width="100%"
              borderRadius={28}
              height="336px"
              containerClassName={style.flex}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4} mb={0}>
            <Skeleton
              width="100%"
              borderRadius={28}
              height="336px"
              containerClassName={style.flex}
            />
          </Grid>
        </Grid>
      </DashBoardContainer>
    </SkeletonTheme>
  );
};