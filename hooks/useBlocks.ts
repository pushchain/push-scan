import { useQuery } from 'react-query';
import { POLL_INTERVAL } from '../utils/constants'
import { makeJsonRpcRequest } from '../utils/json-rpc';
import { PerPageItems } from '../utils/constants';

const RPC_ID = 1

type inputProps = {
    page?: number | null;
};

export const useLiveBlocks = (props: inputProps) => {
    console.log("props : ", props)

    const getBlocks = () => makeJsonRpcRequest(RPC_ID, 'getBlocks', {
        "startTime": Math.floor(Date.now() / 1000),
        "direction": "DESC",
        "showDetails": false,
        "pageSize": PerPageItems,
        "page": props.page
    });

    return useQuery({
        queryKey: ['homeLiveBlocks', props],
        queryFn: getBlocks,
        refetchInterval: POLL_INTERVAL
    });
}