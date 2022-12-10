import axios from 'axios';
import { ROUTES, CREDENTIALKEYS } from 'utils/constants';

const API_BASE = 'https://backend-staging.epns.io/apis/v1';

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
          'x-access-token': token,
        },
      }
    );
    // console.log('get data', res.data);
    return res.data;
  } catch (e) {
    console.log('Error occured in fetching governance data', e);
  }
};

// const data = {
//   Governance: {
//     PGP_Amount: {
//       'Yet To Be Allocated': 80,
//       Approved: 20,
//     },
//     PGP_Proposals: {
//       Approved: 4,
//       Open: 7,
//       Closed: 11,
//     },
//     PGP_Categories: {
//       Defi: 6,
//       NFT: 3,
//       DAO: 4,
//       Tooling: 11,
//       Marketing: 2,
//       Educational: 6,
//       Gaming: 2,
//       Other: 2,
//     },
//     PGIP: {
//       Closed: 4,
//       Approved: 8,
//     },
//   },
//   Downloads: {
//     DApp: 40,
//     'Chrome Extension': 10,
//     'Mobile-iOS': 25,
//     'Mobile-Android': 25,
//   },
// };

export const updateGovernanceData = async ({ data, token }) => {
  try {
    const res = await axios.post(
      `https://backend-staging.epns.io/apis/v1/analytics/governance_data/`,
      {
        governance_data: data,
      },
      {
        headers: {
          'x-access-token': token,
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
          'x-access-token': token,
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
          'x-access-token': token,
        },
      }
    );

    // console.log('user res', res.data);
    return res.data;
  } catch (e) {
    console.log('error', e);
  }
};
