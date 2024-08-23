import React from 'react';
import { Box, Text, Tag, CaretDown } from '../../blocks';

const TXDetails = () => {
    return (
        <>
            <Box
                display={{ml: "none", dp: "flex"}}
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
                    <Tag label="success" variant='success'></Tag>
                    <Text variant="bs-regular" color='text-primary'>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                    <Text variant="bs-regular" color='text-primary'>Notification</Text>
                    <Text variant="bs-regular" color='text-tertiary'>40 minutes ago, Sun, Jul 21 2024 18:33:47 GMT</Text>
                </Box>
            </Box>

            <Box
                display={{ml: "flex", dp: "none"}}
                flexDirection="column"
                alignItems="flex-start"
                borderRadius="radius-sm"
                backgroundColor="surface-primary"
                gap="spacing-md"
                padding="spacing-xs"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Transaction Hash</Text>
                    <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Status</Text>
                    <Tag label="success" variant='success'></Tag>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>
                    <Text variant="bs-regular" color='text-primary' wrap>0x2d2269c5863cc504fef489cca963f3f2beb197b6a80cd1820357d6b5447408df</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Category </Text>
                    <Text variant="bs-regular" color='text-primary'>Notification</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Timestamp</Text>
                    <Text variant="bs-regular" color='text-tertiary'>40 minutes ago, Sun, Jul 21 2024 18:33:47 GMT</Text>

                </Box>
            </Box>
        </>
    );
};

export default TXDetails;