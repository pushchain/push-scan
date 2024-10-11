import React, { useState } from 'react';
import { Box, Text, Tooltip, Copy  } from '../../blocks';
import moment from 'moment';
import { BlockDetails } from '../../types/block'
import { getValidatorNode } from '../../utils/helpers'

interface IProps {
    data: BlockDetails | null | undefined,
    isLoading: boolean
}

const Details = (props: IProps) => {
    const [tooltipText, setToolTipText] = useState('Copy');

    let dateTime = ''
    if (props.data?.ts) {
        const timestamp = (props.data?.ts / 1000)
        const formattedTime = moment.unix(timestamp).utc().fromNow(); // "40 minutes ago"
        const detailedTime = moment.unix(timestamp).utc().format('ddd, MMM DD YYYY HH:mm:ss [GMT]'); // "Sun, Jul 21 2024 18:33:47 GMT"
        dateTime = `${formattedTime}, ${detailedTime}`
    }

    const copyData = (value) => {
        navigator.clipboard.writeText(value);
        setToolTipText('Copied');
        
        setTimeout(() => {
            setToolTipText('Copy');
        }, 1000);
    };

    return (
        <>
            <Box
                display={{ initial:"flex", ml:"none" }}
                flexDirection="row"
                alignItems="flex-start"
                borderRadius="radius-sm"
                border="border-xs solid stroke-secondary"
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
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap="spacing-xxs" >
                        <Text variant="bs-regular" color='text-primary'>{ props.data?.blockHash }</Text>
                        <Box display="flex" justifyContent="flex-end" cursor="pointer">
                            <Tooltip title={tooltipText}>
                                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                    <Copy
                                        onClick={() => copyData(props.data?.blockHash)}
                                        autoSize
                                        size={24}
                                        color="icon-tertiary"
                                    />
                                </Box>
                            </Tooltip>
                        </Box>
                    </Box>
                    
                    <Text variant="bs-regular" color='text-primary'>{ getValidatorNode(props.data?.blockDataAsJson) }</Text>
                    <Text variant="bs-regular" color='text-tertiary'>{ dateTime }</Text>
                </Box>
            </Box>

            <Box
                display={{ initial:"none", ml:"flex" }}
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
                    <Text variant="bs-semibold" color='text-secondary'>Block Hash</Text>

                    <Box css={css`word-break: break-all; overflow-wrap: break-word;`}>
                        <Text variant="bs-regular" color='text-primary' wrap>{ props.data?.blockHash }</Text>
                    </Box>
                </Box>


                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Validator</Text>
                    <Box css={css`word-break: break-all; overflow-wrap: break-word;`}><Text variant="bs-regular" color='text-primary' wrap>{ getValidatorNode(props.data?.signers) }</Text></Box>
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

export default Details;