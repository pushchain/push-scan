import axios from "axios";
import url from "url";

const API_BASE = "https://backend-dev.epns.io/apis/v1";

export const login = async ({ user, pass }) => {
  try {
    const res = await axios.post(`${API_BASE}/login`, {
      username: user,
      password: pass,
    });
    return res.data;
  } catch (e) {
    console.log("Error in login", e);
  }
};

export const getNotifications = async ({ token }) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/notification`, {
      params: {
        startDate: "2022-01-01",
        endDate: "2022-11-01",
        channel: "0x778D3206374f8AC265728E18E3fE2Ae6b93E4ce4",
        source: "ETH_TEST_GOERLI",
        spam: true,
      },
      headers: {
        "x-access-token": token,
      },
    });
    console.log("notifications", res.data);
  } catch (e) {
    console.log("Error occured in notification", e);
  }
};

export const getSubscribers = async ({
  token,
  startDate,
  endDate,
  channel,
  source,
}) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/subscriber`, {
      params: {
        startDate: startDate ? startDate : null,
        endDate: endDate ? endDate : null,
        channel: channel ? channel : "All",
        source: source ? source : null,
      },
      headers: {
        "x-access-token": token,
      },
    });
    console.log("subscribers", res.data);
    return res.data;
  } catch (e) {
    console.log("Error occured in subscribers", e);
  }
};

export const getChannels = async ({ token }) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/channel`, {
      params: {
        startDate: "2022-01-01",
        endDate: "2022-11-01",
        source: "ETH_TEST_GOERLI",
      },
      headers: {
        "x-access-token": token,
      },
    });
    console.log("channels", res.data);
  } catch (e) {
    console.log("Error occured in channels", e);
  }
};

export const getLeaderBoard = async ({ token, limit, sort, order }) => {
  try {
    const res = await axios.get(`${API_BASE}/analytics/leaderboard/`, {
      params: { limit, sort, order },
      headers: {
        "x-access-token": token,
      },
    });
    console.log("leaderboard", res.data);
    return res.data;
  } catch (e) {
    console.log("Error occured in leaderboard", e);
  }
};
