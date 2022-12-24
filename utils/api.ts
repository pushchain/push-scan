// External Library imports
import axios from 'axios';

// Internal Components imports
import { ROUTES, CREDENTIALKEYS } from './constants';

const API_BASE = 'https://backend-dev.epns.io/apis/v1';
// After moving all api to staging remove 'stagingToken' and uncomment token part in getGovernance,updateGovernance, getChats, getUsers

const stagingToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicHVzaF9zdGFnaW5nX3VzZXIiLCJpYXQiOjE2NzE4MTM4MTIsImV4cCI6MTY3MTkwMDIxMn0.xLrRThQ3fKn0aA1L37KRRgUe02_Z1I6CRkP4oenvRtc';

export const login = async ({ user, pass }) => {
  try {
    const res = await axios.post(`${API_BASE}/login`, {
      username: user,
      password: pass,
    });
    // console.log('Login', res.data);
    return res.data;
  } catch (e) {
    console.log('Error in login', e);
  }
};

export const getNotifications = async ({
  token,
  startDate,
  endDate,
  channel,
  chain,
}) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/notification`, {
      params: {
        startDate,
        endDate,
        channel,
        source: chain,
        spam: true,
      },
      headers: {
        'x-access-token': String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)),
      },
    });
    // console.log('notifications', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in notification', e);
  }
};

export const getSubscribers = async ({
  token,
  startDate,
  endDate,
  channel,
  chain,
}) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/subscriber`, {
      params: {
        startDate,
        endDate,
        channel,
        source: chain,
      },
      headers: {
        'x-access-token': String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)),
      },
    });
    // console.log('subscribers', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in subscribers', e);
  }
};

export const getChannels = async ({ token }) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/channel`, {
      params: {
        startDate: '2022-01-01',
        endDate: '2022-11-01',
        source: 'ETH_TEST_GOERLI',
      },
      headers: {
        'x-access-token': String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)),
      },
    });
    // console.log('channels', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in channels', e);
  }
};

export const getLeaderBoard = async ({ token, limit, sort, order }) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/leaderboard/`, {
      params: { limit, sort, order },
      headers: {
        'x-access-token': String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)),
      },
    });
    // console.log('leaderboard', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in leaderboard', e);
  }
};

export const getGovernanceData = async ({ token }) => {
  try {
    const res = await axios.get(
      `https://backend-staging.epns.io/apis/v1/analytics/governance_data/`,
      {
        headers: {
          'x-access-token': stagingToken,
          // String(
          //   sessionStorage.getItem(CREDENTIALKEYS.TOKEN)
          // ),
        },
      }
    );
    // console.log('get data', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in fetching governance data', e);
  }
};

export const updateGovernanceData = async ({ data, token }) => {
  try {
    const res = await axios.post(
      `https://backend-staging.epns.io/apis/v1/analytics/governance_data/`,
      {
        governance_data: data,
      },
      {
        headers: {
          'x-access-token': stagingToken,
          // String(
          //   sessionStorage.getItem(CREDENTIALKEYS.TOKEN)
          // ),
        },
      }
    );
    // console.log('updated data', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in updating governance data', e);
  }
};

export const getChats = async ({ token }) => {
  try {
    const res = await axios.get(
      `https://backend-staging.epns.io/apis/v1/analytics/chat/chats`,
      {
        // params: {
        //   startDate: '2022-01-01',
        //   endDate: '2022-11-01',
        // },
        headers: {
          'x-access-token': stagingToken,
          // String(
          //   sessionStorage.getItem(CREDENTIALKEYS.TOKEN)
          // ),
        },
      }
    );

    // console.log('chats res', res.data);
    return res.data;
  } catch (e) {
    console.log('error', e);
  }
};

export const getUsers = async ({ token }) => {
  try {
    const res = await axios.get(
      `https://backend-staging.epns.io/apis/v1/analytics/chat/users`,
      {
        headers: {
          'x-access-token': stagingToken,
          //   String(
          //     sessionStorage.getItem(CREDENTIALKEYS.TOKEN) ),
        },
      }
    );

    // console.log('user res', res.data);
    return res.data;
  } catch (e) {
    console.log('error', e);
  }
};
