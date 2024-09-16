import React from 'react';
import { Box, Text, Tag } from '../../blocks';
import { Transaction } from '../../types/transaction';
import moment from 'moment';
import { TagVariant } from '../../blocks/tag';
import { Tick } from '../../blocks/icons'
import BlockHashLink from '../Reusables/BlockHashLink'
import { capitalizeStr } from '../../utils/helpers'

interface IProps {
    data: Transaction | null | undefined,
    isLoading: boolean
}

const TXDetails = (props: IProps) => {
    let status: TagVariant = "default"

    if (props.data?.status) {
        status = props.data.status.toLowerCase() as TagVariant
    }

    let dateTime = ''
    if (props.data?.ts) {
        const timestamp = props.data?.ts
        const formattedTime = moment.unix(timestamp).utc().fromNow(); // "40 minutes ago"
        const detailedTime = moment.unix(timestamp).utc().format('ddd, MMM DD YYYY HH:mm:ss [GMT]'); // "Sun, Jul 21 2024 18:33:47 GMT"
        dateTime = `${formattedTime}, ${detailedTime}`
    }

    return (
        <>
            <Box
                display={{ml: "none", dp: "flex"}}
                flexDirection="row"
                alignItems="flex-start"
                borderRadius="radius-sm"
                border="border-xs solid stroke-secondary"
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
                    <Tag icon={<Tick />} label={capitalizeStr(status)} variant={status}></Tag>
                    <BlockHashLink blockHash={props.data?.blockHash} />
                    <Text variant="bs-regular" color='text-primary'>{props.data?.category}</Text>
                    <Text variant="bs-regular" color='text-tertiary'>{dateTime}</Text>
                </Box>
            </Box>

            <Box
                display={{ml: "flex", dp: "none"}}
                flexDirection="column"
                alignItems="flex-start"
                borderRadius="radius-sm"
                border="border-xs solid stroke-secondary"
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
                    <Tag icon={<Tick />} label={capitalizeStr(status)} variant={status}></Tag>

                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>
                    <BlockHashLink blockHash={props.data?.blockHash} />
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
                    <Text variant="bs-regular" color='text-tertiary'>{ dateTime }</Text>
                </Box>
            </Box>
        </>
    );
};

export default TXDetails;