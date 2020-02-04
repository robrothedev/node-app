/**
 * Fetch the JWT public key for decoding via a promise
 *
 * @return string
 */

const axios = require("axios");

module.exports = async () => {
  let response = await axios.get(process.env.PUBLIC_KEY_URL);
  return response.data;
};