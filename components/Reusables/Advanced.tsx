import React from 'react';
import { Box, Text, CaretDown } from '../../blocks';

const Advanced = () => {
  return (
      <Box
        display="flex"
        flexDirection="row"
        gap="spacing-xxs"
      >
        <Text variant='bes-semibold' color='text-primary'>Advanced</Text>
        <CaretDown />
      </Box>
  );
};

export default Advanced;