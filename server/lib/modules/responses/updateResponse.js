/**
 * Updates the response by response_id
 *
 * @param {Object} data
 * @param {Number} responseId Primary id for record
 * @return {Boolean}
 */

const db = require("libs/db");
module.exports = async (data, responseId) => {
  let sql = "UPDATE response SET ?, updated_at=now() WHERE response_id=?";
  return await db(sql, [data, responseId]);
};