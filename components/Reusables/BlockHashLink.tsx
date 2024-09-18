import React, { useState } from 'react';
import { Box, Text, Tooltip, Copy } from '../../blocks';
import { rightMaskString } from '../../utils/helpers';
import Link from 'next/link';

const BlockHashLink = ({ blockHash, masking = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipText, setToolTipText] = useState('Copy');

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const maskedBlockHash = masking ? rightMaskString(blockHash) : blockHash;

    const copyData = () => {
        navigator.clipboard.writeText(blockHash);
        setToolTipText('Copied');
        
        setTimeout(() => {
            setToolTipText('Copy');
        }, 1000);
    };

    return (
        <Box 
            display="flex" 
            flexDirection="row" 
            gap="spacing-xxs" 
            alignItems="center" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? (
                <Link href={`/blocks/${blockHash}`}>
                    <Text variant='bs-regular' color="text-brand-medium">
                        {maskedBlockHash}
                    </Text>
                </Link>
            ) : (
                <Text variant='bs-regular' color="text-primary">
                    {maskedBlockHash}
                </Text>
            )}

            <Box display="flex" justifyContent="flex-end" cursor="pointer">
                <Tooltip title={tooltipText}>
                    <Copy
                        onClick={copyData}
                        autoSize
                        size={24}
                        color="icon-tertiary"
                    />
                </Tooltip>
            </Box>
        </Box>
    );
};

export default BlockHashLink;
