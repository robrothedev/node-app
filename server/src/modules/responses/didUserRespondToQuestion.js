/**
 * Finds a response_id to a question based on question_id and user_id
 *
 * When a user submits a response, we want to see if it exists first so
 * we don't create a new record, but rather update the existing record
 *
 * @param {Number} questionId
 * @param {Number} userId
 * @return {Number|null}
 */

const db = require("libs/db");

module.exports = async (questionId, userId) => {
  let sql =
    "SELECT response_id FROM response WHERE question_id = ? AND user_id = ?";
  let row = await db(sql, [questionId, userId]);
  return row.length ? row[0].response_id : null;
};
