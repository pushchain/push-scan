import React, { FC } from 'react';
import { Box, Text, Separator, Skeleton } from '../../blocks';
import { useCounts } from '../../hooks/useCounts';

export type OverViewProps = {};

const OverView: FC<OverViewProps> = () => {
    const { data, error, isLoading, isError } = useCounts();    
    return (
        <Box
            display="flex"
            flexDirection={{ ml: "column", initial: "row"}}
            justifyContent="space-between"
            gap="spacing-xxxs"
            padding="spacing-sm"
            border="border-lg solid stroke-secondary"
            backgroundColor="surface-primary"
            borderRadius='radius-md'
            width="-webkit-fill-available"
        >   
                <Skeleton isLoading={isLoading}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        gap="spacing-xxxs"
                        padding="spacing-sm"
                    >
                        <Text variant="h6-regular" color='text-tertiary'>Transactions</Text>
                        <Text variant="h3-semibold" color='text-primary'>{data?.totalTransactions}</Text>
                    </Box>
                </Skeleton>

                <Box display={{ initial: 'block', ml: 'none' }}>
                    <Separator orientation="vertical" />
                </Box>

                <Box display={{ initial: 'none', ml: 'block' }}>
                    <Separator orientation="horizontal" />
                </Box>

                <Skeleton isLoading={isLoading}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        gap="spacing-xxxs"
                        padding="spacing-sm"
                        border-left="border-sm solid stroke-secondary"
                    >
                        <Text variant="h6-regular" color='text-tertiary'>Total Blocks</Text>
                        <Text variant="h3-semibold" color='text-primary'>{data?.totalBlocks}</Text>
                    </Box>
                </Skeleton>

                <Box display={{ initial: 'block', ml: 'none' }}>
                    <Separator orientation="vertical" />
                </Box>

                <Box display={{ initial: 'none', ml: 'block' }}>
                    <Separator orientation="horizontal" />
                </Box>

                <Skeleton isLoading={isLoading}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        gap="spacing-xxxs"
                        padding="spacing-sm"
                        border-left="border-sm solid stroke-secondary"
                    >
                        <Text variant="h6-regular" color='text-tertiary'>Daily Transactions</Text>
                        <Text variant="h3-semibold" color='text-primary'>{data?.dailyTransactions}</Text>
                    </Box>
                </Skeleton>
        </Box>
    )
}

export default OverView;
