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
    console.log('channels', res.data);
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
