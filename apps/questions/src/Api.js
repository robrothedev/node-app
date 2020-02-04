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
          window.location =
            "authurlhere";
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

const questions = async () => {
  let res = await axios.get(url + "/questions");
  return res.data;
};

const event = async () => {
  let res = await axios.get(url + "/event");
  return res.data;
};

const respond = async response => {
  let res = await axios.post(url + "/response", response);
  try {
    return res.data;
  } catch (e) {
    return e;
  }
};

export default {
  event: event,
  questions: questions,
  respond: respond
};
