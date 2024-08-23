import { useQuery } from 'react-query';
import { POLL_INTERVAL } from '../utils/constants'
import { makeJsonRpcRequest } from '../utils/json-rpc';

const RPC_ID = 1

export const useLiveBlocks = () => {
    const getBlocks = () => makeJsonRpcRequest(RPC_ID, 'getBlocks', {
        "startTime": Math.floor(Date.now() / 1000),
        "direction": "DESC",
        "showDetails": false,
        "pageSize": 10
    });

    return useQuery('homeLiveBlocks', getBlocks, {
        refetchInterval: POLL_INTERVAL
    }); 
}