// React, NextJS imports
import React from 'react';

// External Library imports
import 'react-loading-skeleton/dist/skeleton.css';
import {  ItemVV2, SkeletonLine } from '../Reusables/SharedStyling';

export const GraphHeadingLoader = () => {

  return (
    <ItemVV2 alignItems="flex-start" gap="12px">
      <SkeletonLine height="12px" width="25%" borderRadius="16px" />
      <SkeletonLine height="26px" width="30%" borderRadius="9px" />
    </ItemVV2>
  );
};
