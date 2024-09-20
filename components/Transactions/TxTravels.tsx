import React, { useState } from 'react';
import { Add, Box, Text, Tooltip, Copy } from '../../blocks';
import { Transaction } from '../../types/transaction';
import Address from '../Reusables/AddressComponent'

const MAX_DISPLAY = 5;

interface IProps {
    data: Transaction | null | undefined,
    isLoading: boolean
}

const TxTravels = (props: IProps) => {
    const [showAll, setShowAll] = useState(false);
    const [tooltipText, setToolTipText] = useState('Copy');

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const recipients = props.data?.recipients?.recipients || [];
    const displayedRecipients = showAll ? recipients : recipients.slice(0, MAX_DISPLAY);
    const showMoreButton = recipients.length > MAX_DISPLAY;

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
                    <Text variant="bs-semibold" color='text-secondary'>From</Text>
                    <Text variant="bs-semibold" color='text-secondary'>To</Text>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                    justifyContent="flex-start"
                >
                    
                    <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs" >
                        <Address address={props.data?.from} masking={false} />
                        <Box display="flex" justifyContent="flex-end" cursor="pointer">
                            <Tooltip title={tooltipText}>
                                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                    <Copy
                                        onClick={() => copyData(props.data?.from)}
                                        autoSize
                                        size={24}
                                        color="icon-tertiary"
                                    />
                                </Box>
                            </Tooltip>
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                        justifyContent="flex-start"
                    >
                        {displayedRecipients.map((recipient, index) => (
                            <Box key={recipient.address} display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs" >
                                <Address key={index} address={recipient.address} masking={false}/>
                                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                    <Tooltip title={tooltipText}>
                                        <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                            <Copy
                                                onClick={() => copyData(recipient.address)}
                                                autoSize
                                                size={24}
                                                color="icon-tertiary"
                                            />
                                        </Box>
                                    </Tooltip>
                                </Box>
                            </Box>
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
                                <Add color='icon-brand-medium'/>
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
                border="border-xs solid stroke-secondary"
                backgroundColor="surface-primary"
                gap="spacing-md"
                padding="spacing-xs"                
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing-xxxs"
                    justifyContent="flex-start"
                >
                    <Text variant="bs-semibold" color='text-secondary'>From</Text>
                    <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs" >
                        <Address address={props.data?.from} masking={false} wrap={true} />
                        <Box display="flex" justifyContent="flex-end" cursor="pointer">
                            <Tooltip title={tooltipText}>
                                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                    <Copy
                                        onClick={() => copyData(props.data?.from)}
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
                    display="flex"
                    flexDirection="column"
                    gap="spacing-sm"
                >
                    <Text variant="bs-semibold" color='text-secondary'>To</Text>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing-xs"
                        justifyContent="flex-start"
                    >
                        {displayedRecipients.map((recipient, index) => (
                            <Box key={recipient.address} display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs" >
                                <Address address={recipient.address} masking={false} wrap={true} />
                                <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                    <Tooltip title={tooltipText}>
                                        <Box display="flex" justifyContent="flex-end" cursor="pointer">
                                            <Copy
                                                onClick={() => copyData(recipient.address)}
                                                autoSize
                                                size={24}
                                                color="icon-tertiary"
                                            />
                                        </Box>
                                    </Tooltip>
                                </Box>
                            </Box>

                            
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
                                <Add color='icon-brand-medium'/>
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