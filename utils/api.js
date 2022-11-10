import axios from "axios";

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

export const getNotifications = async () => {
  try {
    const res = await axios.post(`${API_BASE}/analytics/notification`);
    console.log("notifications", res.data);
  } catch (e) {
    console.log("Error occured in notification", e);
  }
};

export const getSubscribers = async () => {
  try {
    const res = await axios.post(`${API_BASE}/analytics/subscriber`);
    console.log("subscribers", res.data);
  } catch (e) {
    console.log("Error occured in subscribers", e);
  }
};

export const getChannels = async () => {
  try {
    const res = await axios.post(`${API_BASE}/analytics/channel`);
    console.log("channels", res.data);
  } catch (e) {
    console.log("Error occured in channels", e);
  }
};

export const getLeaderBoard = async () => {
  try {
    const res = await axios.post(`${API_BASE}/analytics/leaderboard`);
    console.log("leaderboard", res.data);
  } catch (e) {
    console.log("Error occured in leaderboard", e);
  }
};
