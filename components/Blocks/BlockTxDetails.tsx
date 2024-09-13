import React from 'react';
import { Box, Text } from '../../blocks';
import { BlockDetails } from '../../types/block'

interface IProps {
    data: BlockDetails | null | undefined,
    isLoading: boolean
}

const BlockTXDetails = (props: IProps) => {
    return (
        <>
            <Box
                display={{ml: "none", dp: "flex"}}
                flexDirection="row"
                alignItems="flex-start"
                borderRadius="radius-sm"
                backgroundColor="surface-primary"
                gap="spacing-xxxxxl"
                padding="spacing-md"
            >
                <Box
                    width="134px"
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Transactions</Text>
                    <Text variant="bs-semibold" color='text-secondary'>Block Size</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-regular" color='text-primary'>{ props.data?.totalNumberOfTxns }</Text>
                    <Text variant="bs-regular" color='text-primary'>{ props.data?.blockSize }</Text>
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
                    <Text variant="bs-semibold" color='text-secondary'>Transactions</Text>
                    <Text variant="bs-regular" color='text-primary' wrap>{ props.data?.totalNumberOfTxns }</Text>
                </Box>


                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Block Size</Text>
                    <Text variant="bs-regular" color='text-primary' wrap>{ props.data?.blockSize }</Text>
                </Box>
            </Box>
        </>
    );
};

export default BlockTXDetails;