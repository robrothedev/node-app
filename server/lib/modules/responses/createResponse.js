/**
 * Creates a response to an event question
 *
 * @param {Object} data
 * @return {Object}
 */

const db = require("libs/db");

module.exports = async data => {
  let sql = "INSERT INTO response SET ?, created_at=now()";
  return await db(sql, [data]);
};