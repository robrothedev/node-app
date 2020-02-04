import axios from "axios";
import token from "./token";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
if (window.location.href == "http://localhost:3000/") {
  axios.defaults.headers.common["Authorization"] = token;
}

axios.interceptors.response.use(
  // response successful
  function(response) {
    return response;
  },

  // response error
  function(error) {
    try {
      switch (error.response.status) {
        case 401:
          window.location = "";
          break;
      }
    } catch (e) {
      console.log("response error", e);
    }
    return Promise.reject(error);
  }
);

// ------------------------------------------------

const url = "";

const users = async () => {
  let res = await axios.get(url + "/users");
  return res.data;
};

const totals = async () => {
  let res = await axios.get(url + "/responses");
  return res.data;
};

const userResponse = async userId => {
  let res = await axios.get(url + "/users/" + userId + "/responses");
  return res.data;
};

export default {
  users: users,
  totals: totals,
  userResponse: userResponse
};
