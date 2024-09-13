import React from 'react';
import { Box, Text, Tag } from '../../blocks';
import { Transaction } from '../../types/transaction';
import moment from 'moment';
import { TagVariant } from '../../blocks/tag';
import { Tick } from '../../blocks/icons'
import BlockHashLink from '../Reusables/BlockHashLink'

interface IProps {
    data: Transaction | null | undefined,
    isLoading: boolean
}

const TXDetails = (props: IProps) => {
    let status: TagVariant = "default"

    if (props.data?.status) {
        status = props.data.status.toLowerCase() as TagVariant
    }

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
                    width="134px"
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
                    <Text variant="bs-regular" color='text-primary'>{props.data?.txnHash}</Text>
                    <Tag icon={<Tick />} label={status} variant={status}></Tag>
                    <BlockHashLink blockHash={props.data?.blockHash} />
                    <Text variant="bs-regular" color='text-primary'>{props.data?.category}</Text>
                    <Text variant="bs-regular" color='text-tertiary'>{ props.data?.ts && moment(props.data.ts * 1000).fromNow() }</Text>
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
                    <Text variant="bs-regular" color='text-primary' wrap>{props.data?.txnHash}</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Status</Text> 
                    <Tag label={status} variant={status}></Tag>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>
                    <Text variant="bs-regular" color='text-primary' wrap>{props.data?.blockHash}</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Category </Text>
                    <Text variant="bs-regular" color='text-primary'>{props.data?.category}</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Timestamp</Text>
                    <Text variant="bs-regular" color='text-tertiary'>{ props.data?.ts && moment(props.data.ts * 1000).fromNow() }</Text>
                </Box>
            </Box>
        </>
    );
};

export default TXDetails;