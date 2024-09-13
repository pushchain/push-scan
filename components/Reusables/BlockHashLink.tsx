import React, { useState } from 'react';
import { Box, Text } from '../../blocks';
import { rightMaskString } from '../../utils/helpers';
import Link from 'next/link';

const BlockHashLink = ({ blockHash, masking = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const maskedBlockHash = masking ? rightMaskString(blockHash) : blockHash;

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
        </Box>
    );
};

export default BlockHashLink;
