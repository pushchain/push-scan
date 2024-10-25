// React, NextJS imports
import React from 'react';

// External Components imports
import { css } from 'styled-components';

// Internal Components imports
import { Box, Text } from '../../blocks';
import { BlockDetails } from '../../types/block';

interface IProps {
  data: BlockDetails | null | undefined;
  isLoading: boolean;
}

const BlockTXDetails = (props: IProps) => {
  return (
    <>
      <Box
        display={{ initial: 'flex', ml: 'none' }}
        flexDirection="column"
        alignItems="flex-start"
        borderRadius="radius-sm"
        border="border-xs solid stroke-secondary"
        backgroundColor="surface-primary"
        gap="spacing-sm"
        padding="spacing-md"
      >
        <DetailRow label="Transactions">
          <>
            <Text variant="bs-regular" color="text-primary">
              {props.data?.totalNumberOfTxns}
            </Text>
          </>
        </DetailRow>
        <DetailRow label="Block Size">
          <>
            <Text variant="bs-regular" color="text-primary">
              {props.data?.blockSize.toLocaleString()}
            </Text>
          </>
        </DetailRow>
      </Box>

      <Box
        display={{ initial: 'none', ml: 'flex' }}
        flexDirection="column"
        alignItems="flex-start"
        borderRadius="radius-sm"
        border="border-xs solid stroke-secondary"
        backgroundColor="surface-primary"
        gap="spacing-md"
        padding="spacing-xs"
      >
        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Transactions
          </Text>
          <Text variant="bs-regular" color="text-primary" wrap>
            {props.data?.totalNumberOfTxns}
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xxxs">
          <Text variant="bs-semibold" color="text-secondary">
            Block Size
          </Text>
          <Text variant="bs-regular" color="text-primary" wrap>
            {props.data?.blockSize.toLocaleString()}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default BlockTXDetails;

const DetailRow = ({ label, children }) => (
  <Box display="flex" width="-webkit-fill-available">
    <Box
      css={css`
        flex: 1;
      `}
    >
      <Text variant="bs-semibold" color="text-secondary">
        {label}
      </Text>
    </Box>
    <Box
      css={css`
        flex: 3;
      `}
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      gap="spacing-xxs"
    >
      {children}
    </Box>
  </Box>
);
