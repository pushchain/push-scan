import { useQuery } from 'react-query';
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { Transaction } from '../types/transaction';
import { POLL_INTERVAL } from '../utils/constants'
import { PerPageItems } from '../utils/constants';

const RPC_ID = 7

export interface searchProps {
    address: string | string[] | undefined;
    page: number
}

export const useSearchByAddress = (params: searchProps) => {    
    const searchByAddress = () => makeJsonRpcRequest(RPC_ID, 'searchByAddress', {
        "searchTerm": params.address,
        "startTime": Math.floor(Date.now() / 1000),
        "direction": "DESC",
        "pageSize": PerPageItems,
        "page": params.page,
        "showDetails": true
    });

    return useQuery({
        queryKey: ['searchByAddressDetailswee', params],
        queryFn: searchByAddress,
        select: (data) => {
            const transactions = data.blocks.flatMap(block =>
                block.transactions.map(tx => ({
                    ...tx,
                    recipients: tx.recipients.recipients.map(recipient => recipient.address)
                }))
            );
            // Sorting transactions by timestamp in descending order
            return {
                transactions: transactions.sort((a, b) => b.ts - a.ts),
                totalPages: data.totalPages,
                lastTs: data.lastTs
            }
        }
    });
}