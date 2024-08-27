import React, { useState } from 'react';
import { Box, Text, Ethereum } from '../../blocks';
import { Transaction } from '../../types/transaction';

const MAX_DISPLAY = 5;

interface IProps {
    data: Transaction | null | undefined,
    isLoading: boolean
}

const TxTravels = (props: IProps) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const recipients = props.data?.recipients?.recipients || [];
    const displayedRecipients = showAll ? recipients : recipients.slice(0, MAX_DISPLAY);
    const showMoreButton = recipients.length > MAX_DISPLAY;

    return (
        <>
            <Box
                display={{ml: "none", dp: "flex"}}
                flexDirection="row"
                alignItems="flex-start"
                borderRadius="radius-sm"
                backgroundColor="surface-primary"
                gap="spacing-xxxl"
                padding="spacing-md"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-semibold" color='text-secondary'>From</Text>
                    <Text variant="bs-semibold" color='text-secondary'>To</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-regular" color='text-primary'>{props.data?.from}</Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xxs"
                    >
                        {displayedRecipients.map((recipient, index) => (
                            <Text key={index} variant="bs-regular" color='text-primary'>{recipient.address}</Text>
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
                    gap="spacing-xxxs"
                >
                    <Text variant="bs-semibold" color='text-secondary'>From</Text>
                    <Box
                        display="flex"
                        flexDirection="row"
                        gap="spacing-xxxs"
                    >
                        <Ethereum height={20} width={20} />
                        <Text variant="bs-regular" color='text-primary' wrap>{props.data?.from}</Text>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-semibold" color='text-secondary'>To</Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                    >
                        {displayedRecipients.map((recipient, index) => (
                            <Text key={index} variant="bs-regular" color='text-primary'>{recipient.address}</Text>
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
            </Box>
        </>
    );
};

export default TxTravels;