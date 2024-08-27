import { useQuery } from 'react-query';
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { Transaction } from '../types/transaction';
import { POLL_INTERVAL } from '../utils/constants'

const RPC_ID = 7

export interface searchProps {
    address: string | string[] | undefined;
}

export const useSearchByAddress = (params: searchProps) => {    
    
    console.log("useSearchByAddress hook params : ", params.address)
    
    const searchByAddress = () => makeJsonRpcRequest(RPC_ID, 'searchByAddress', {
        "searchTerm": params.address,
        "startTime": Math.floor(Date.now() / 1000),
        "direction": "DESC",
        "pageSize": 10,
        "showDetails": true
    });

    return useQuery('searchByAddressDetailswee', searchByAddress, {
        cacheTime: 0,
        staleTime: 0,
        refetchInterval: 1000,
        select: (data) => {
            const transactions = data.blocks.flatMap(block =>
                block.transactions.map(tx => ({
                    txHash: tx.txnHash,
                    ts: tx.ts,
                    blockHash: tx.blockHash,
                    category: tx.category,
                    status: tx.status,
                    source: tx.source,
                    from: tx.from,
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