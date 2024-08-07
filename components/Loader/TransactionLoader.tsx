// React, NextJS imports
import React from 'react';

// External Library imports
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled, { useTheme } from 'styled-components';

// Internal Components imports
import { ThemeType } from '../../types/theme';

export const TransactionLoader = () => {
  const theme = useTheme() as ThemeType;

  return (
    <SkeletonTheme
      baseColor={theme?.background?.secondary}
      highlightColor={theme?.background?.default}
    >
    </SkeletonTheme>
  );
};