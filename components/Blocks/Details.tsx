import React from 'react';
import { Box, Text } from '../../blocks';
import moment from 'moment';
import { BlockDetails } from '../../types/block'
import { getValidatorNode } from '../../utils/helpers'

interface IProps {
    data: BlockDetails | null | undefined,
    isLoading: boolean
}

const Details = (props: IProps) => {

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
                    <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>
                    <Text variant="bs-semibold" color='text-secondary'>Validator</Text>
                    <Text variant="bs-semibold" color='text-secondary'>Timestamp</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-regular" color='text-primary'>{ props.data?.blockHash }</Text>
                    <Text variant="bs-regular" color='text-primary'>{ getValidatorNode(props.data?.signers) }</Text>
                    <Text variant="bs-regular" color='text-tertiary'>{ dateTime }</Text>
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
                    <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>
                    <Text variant="bs-regular" color='text-primary' wrap>{ props.data?.blockHash }</Text>
                </Box>


                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Validator</Text>
                    <Text variant="bs-regular" color='text-primary' wrap>{ getValidatorNode(props.data?.signers) }</Text>
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

export default Details;