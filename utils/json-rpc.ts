import axios from 'axios';

const API_BASE = 'http://localhost:3000/rpc';

export const makeJsonRpcRequest = async (id, method, params = {}) => {
  const data = {
    jsonrpc: '2.0',
    method: `RpcService.${method}`,
    params: params,
    id
  };

  try {
    const response = await axios.post(API_BASE, data);    
    return response.data.result;
  } catch (error) {
    throw new Error('JSON-RPC Error: ' + error.message);
  }
};