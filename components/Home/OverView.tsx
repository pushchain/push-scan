import React, { FC } from 'react';
import { Box, Text, Separator, Skeleton } from '../../blocks';
import { useCounts } from '../../hooks/useCounts';

export type OverViewProps = {};

const OverView: FC<OverViewProps> = () => {
    const { data, isLoading } = useCounts();    
    return (
        <Box
            display="flex"
            flexDirection={{ ml: "column", initial: "row"}}
            justifyContent="center"
            alignItems="center"
            gap="spacing-xxxs"
            padding="spacing-sm"
            border="border-lg solid stroke-secondary"
            backgroundColor="surface-primary"
            borderRadius='radius-md'
            width="100%"
        >   
                <Skeleton isLoading={isLoading}>
                    <Box
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        align-items="flex-start"
                        gap="spacing-xxxs"
                        padding="spacing-none spacing-lg spacing-none spacing-lg"
                    >
                        <Text variant="h6-regular" color='text-tertiary'>Transactions</Text>
                        <Text variant="h3-semibold" color='text-primary'>{data?.totalTransactions}</Text>
                    </Box>
                </Skeleton>
                

                <Skeleton isLoading={isLoading}>
                    <Box
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        align-items="flex-start"
                        gap="spacing-xxxs"
                        padding="spacing-none spacing-lg spacing-none spacing-lg"
                        css={`border-left: var(--border-md) solid var(--stroke-tertiary);`} 
                    >
                        <Text variant="h6-regular" color='text-tertiary'>Total Blocks</Text>
                        <Text variant="h3-semibold" color='text-primary'>{data?.totalBlocks}</Text>
                    </Box>
                </Skeleton>

                <Skeleton isLoading={isLoading}>
                    <Box
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        align-items="flex-start"
                        gap="spacing-xxxs"
                        padding="spacing-none spacing-lg spacing-none spacing-lg"
                        css={`border-left: var(--border-md) solid var(--stroke-tertiary);`} 
                    >
                        <Text variant="h6-regular" color='text-tertiary'>Daily Transactions</Text>
                        <Text variant="h3-semibold" color='text-primary'>{data?.dailyTransactions}</Text>
                    </Box>
                </Skeleton>
        </Box>
    )
}

export default OverView;
