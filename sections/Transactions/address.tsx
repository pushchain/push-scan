// React, NextJS imports
import React from 'react';
// External Library imports
import { useMediaQuery } from '@mui/material';
import SearchContainer from '../../components/Home/SearchContainer';
import BlocksContainer from '../../components/Home/BlocksContainer';
import { Box, Text, Add, CaretDown, Button } from '../../blocks';

interface TransactionDetailsProps {
    address: string | string[] | undefined;
}

const Details = (props: TransactionDetailsProps) => {
  const isMobile = useMediaQuery('(max-width:480px)');
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      gap="spacing-sm"
      padding="spacing-xxxl"
    >
      <Text variant="h3-semibold" color='text-primary'>Transaction Details</Text>
      
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        borderRadius="radius-sm"
        backgroundColor="surface-primary"
        gap="spacing-xxxxl"
        padding="spacing-md"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
        >
          <Text variant="bs-semibold" color='text-secondary'>Transaction Hash</Text>
          <Text variant="bs-semibold" color='text-secondary'>Status</Text>
          <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>
          <Text variant="bs-semibold" color='text-secondary'>Category </Text>
          <Text variant="bs-semibold" color='text-secondary'>Timestamp</Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
        >
          <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
          <Text variant="bs-regular" color='text-primary'>Success</Text>
          <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
          <Text variant="bs-regular" color='text-primary'>Notification</Text>
          <Text variant="bs-regular" color='text-tertiary'>40 minutes ago, Sun, Jul 21 2024 18:33:47 GMT</Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        borderRadius="radius-sm"
        backgroundColor="surface-primary"
        gap="spacing-xxxxl"
        padding="spacing-md"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
        >
          <Text variant="bs-semibold" color='text-secondary'>From</Text>
          <Text variant="bs-semibold" color='text-secondary'>To</Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
        >
          <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
          <Box>
            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-xxs"
              color="text-brand-medium"
            >
              <Add />
              <Text variant='bes-semibold' color="text-brand-medium">Show more</Text>
            </Box>
            
          </Box>
          
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xxs"
      >
        <Text variant='bes-semibold' color='text-primary'>Advanced</Text>
        <CaretDown />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        borderRadius="radius-sm"
        backgroundColor="surface-primary"
        padding="spacing-md"
        gap="spacing-md"
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-xxxxl"
        >
          <Box>
            <Text variant="bs-semibold" color='text-secondary'>Consensus Info</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
          >
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
              <Button
                aria-label="Cancel"
                size="extraSmall"
                variant="outline"
                onClick={() => {}}
              >
                <Text>Accept</Text>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
              <Button
                aria-label="Cancel"
                size="extraSmall"
                variant="outline"
                onClick={() => {}}
              >
                <Text>Accept</Text>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
              <Button
                aria-label="Cancel"
                size="extraSmall"
                variant="outline"
                onClick={() => {}}
              >
                <Text>Accept</Text>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
              <Button
                aria-label="Cancel"
                size="extraSmall"
                variant="outline"
                onClick={() => {}}
              >
                <Text>Accept</Text>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
              <Button
                aria-label="Cancel"
                size="extraSmall"
                variant="outline"
                onClick={() => {}}
              >
                <Text color='text-state-danger-bold'>Reject</Text>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
              <Button
                aria-label="Cancel"
                size="extraSmall"
                variant="outline"
                onClick={() => {}}
              >
                <Text>Accept</Text>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-xxs"
              color="text-brand-medium"
            >
              <Add />
              <Text variant='bes-semibold' color="text-brand-medium">Show more</Text>
            </Box>
            
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          gap="spacing-xxxxl"
        >
          <Text variant="bs-semibold" color='text-secondary'>Payload Data</Text>

          <Box
            border="border-sm solid stroke-tertiary"
            borderRadius="radius-xs"
            padding="spacing-sm"
          >
            <Text variant='bs-semibold' color='text-tertiary' wrap>0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000006419000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024ac6824ffa0000000000000000000000000000000000000000000000000000000000c2b5a6000000000000000000000000000000000000000000000000000000000000017f00000000000000000000000000000000000000000000000000000000000020d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020d40000000000000000000000000000000000000000000000000000000000c2f8cd0000000000000000000</Text>
          </Box>
          
        </Box>
      </Box>


    </Box>
  );
};

export default Details;