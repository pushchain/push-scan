import React, { useState } from 'react';
import { Box, Text, Button, Add, Ethereum, Tooltip, Copy } from '../../blocks';
import { BlockDetails } from '../../types/block'

interface IProps {
    data: BlockDetails | null | undefined,
    isLoading: boolean
}

const MAX_DISPLAY_NODES = 5 
const MAX_DISPLAY_CHARS = 700;

const ConsensusInfo = (props: IProps) => {
    const [showAll, setShowAll] = useState(false);
    const [showAllPayload, setShowAllPayload] = useState(false);
    const [tooltipText, setToolTipText] = useState('Copy Payload');

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const toggleShowAllPayload = () => {
        setShowAllPayload(!showAllPayload);
    };

    const nodes = props.data?.signers.map((signer) => signer.node) || []
    const displayedNodes = showAll ? nodes : nodes.slice(0, MAX_DISPLAY_NODES);
    const showMoreButton = nodes.length > MAX_DISPLAY_NODES;

    const payload = props.data?.blockData || "";
    const displayedPayload = showAllPayload ? payload : payload.substring(0, MAX_DISPLAY_CHARS);
    const showMorePayloadButton = payload.length > MAX_DISPLAY_CHARS;

    const copyPayload = () => {
        if (payload) {
            navigator.clipboard.writeText(payload);
            setToolTipText('Copied');
        }
        setTimeout(() => {
            setToolTipText('Copy Payload');
        }, 1000);
    };

    return (
        <>
            <Box
                display={{ml: "none", dp: "flex"}}
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
                    gap="spacing-xxxxxl"
                >
                    <Box width="134px">
                        <Text variant="bs-semibold" color='text-secondary'>Consensus Info</Text>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                    >
                        {displayedNodes.map((node, index) => (
                            <Text key={index} variant="bs-regular" color='text-primary'>{node}</Text>
                        ))}
                        
                        {showMoreButton && (
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap="spacing-xxs"
                                cursor="pointer"
                                onClick={toggleShowAll}
                            >
                                <Text variant='bes-semibold' color="text-brand-medium">
                                    {showAll ? 'Show Less' : 'Show More'}
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing-xxxxxl"
                >
                    <Box width="134px"><Text variant="bs-semibold" color='text-secondary'>Payload Data</Text></Box>

                    <Box
                        border="border-sm solid stroke-tertiary"
                        borderRadius="radius-xs"
                        padding="spacing-sm"
                        width="52vw"
                    >  
                        <Text variant='bs-semibold' color='text-tertiary' wrap>{displayedPayload}</Text>
                        {showMorePayloadButton && (
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap="spacing-xxs"
                                cursor="pointer"
                                onClick={toggleShowAllPayload}
                            >
                                <Text variant='bes-semibold' color="text-brand-medium">
                                    {showAllPayload ? 'Show Less' : 'Show More'}
                                </Text>
                            </Box>
                        )}
                        <Tooltip title={tooltipText}>
                            <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                <Copy
                                    onClick={copyPayload}
                                    autoSize
                                    size={24}
                                    color="icon-tertiary"
                                />
                            </Box>
                        </Tooltip>
                    </Box>  
                </Box>
            </Box>

            <Box
                display={{ ml: "flex", dp: "none" }}
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
                    gap="spacing-xs"
                >
                    <Box>
                        <Text variant="bs-semibold" color='text-secondary'>Consensus Info</Text>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                    >
                        {displayedNodes.map((node, index) => (
                            <Text key={index} variant="bs-regular" color='text-primary'>{node}</Text>
                        ))}
                        
                        {showMoreButton && (
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap="spacing-xxs"
                                cursor="pointer"
                                onClick={toggleShowAll}
                            >
                                <Text variant='bes-semibold' color="text-brand-medium">
                                    {showAll ? 'Show Less' : 'Show More'}
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>Payload Data</Text>

                    <Box
                        border="border-sm solid stroke-tertiary"
                        borderRadius="radius-xs"
                        padding="spacing-sm"
                        width="88vw"
                    >
                        <Text variant='bs-semibold' color='text-tertiary' wrap>{displayedPayload}</Text>
                        {showMorePayloadButton && (
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap="spacing-xxs"
                                cursor="pointer"
                                onClick={toggleShowAllPayload}
                            >
                                <Text variant='bes-semibold' color="text-brand-medium">
                                    {showAllPayload ? 'Show Less' : 'Show More'}
                                </Text>
                            </Box>
                        )}
                        <Tooltip title={tooltipText}>
                            <Box cursor="pointer">
                                <Copy
                                    onClick={copyPayload}
                                    autoSize
                                    size={24}
                                    color="icon-tertiary"
                                />
                            </Box>
                        </Tooltip>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default ConsensusInfo;