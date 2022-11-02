import axios from "axios";

export const login = async ({ user, pass }) => {
  try {
    const res = await axios.post("https://backend-dev.epns.io/apis/v1/login", {
      username: user,
      password: pass,
    });
    return res.data;
  } catch (e) {
    console.log("Error in login", e);
  }
};
