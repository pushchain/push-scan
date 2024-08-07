// React, NextJS imports
import React from 'react';
// External Library imports
import { useMediaQuery } from '@mui/material';
import { Box, Text, Add, CaretDown, Button } from '../../blocks';

const Blocks = () => {
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
      <Text variant="h3-semibold" color='text-primary'>Block Details</Text>
      
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
          <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>
          <Text variant="bs-semibold" color='text-secondary'>Validator </Text>
          <Text variant="bs-semibold" color='text-secondary'>Timestamp</Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
        >
          <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
          <Text variant="bs-regular" color='text-primary'>0x482741Ab0442755d344Ff8BDbEcc1e7b9BeB2823</Text>
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
          <Text variant="bs-semibold" color='text-secondary'>Transactions</Text>
          <Text variant="bs-semibold" color='text-secondary'>Block Size </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-sm"
        >
          <Text variant="bs-regular" color='text-primary'>792</Text>
          <Text variant="bs-regular" color='text-primary'>3,968,000</Text>
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
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-lg"
            >
              <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
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
      </Box>
    </Box>
  );
};

export default Blocks;