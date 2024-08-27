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
        refetchInterval: 5000,
        select: (data) => {
            if (data.blocks && data.blocks.length > 0) {
                const { blocks } = data;
                // Creating a summary of the block details
                const transaction: Transaction = blocks[0].transactions[0]

                return {
                    transaction
                }
            }

            return {
                transaction: null
            }
        }
    }); 
}