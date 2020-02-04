/**
 * Fetches the questions and responses, if applicable, by the event and user id
 *
 * If no response was found by the user, then a blank string is created instead
 *
 * @param {Number} userId
 * @param {Number} eventId
 * @return {Array}
 */

const db = require("libs/db");

module.exports = async (userId, eventId) => {
  let sql =
    "SELECT question,question.question_id, required, type,IF (response != '',response,'') as response FROM question LEFT JOIN response ON (response.question_id = question.question_id AND user_id = ?) WHERE question.event_id = ? GROUP BY question_id ORDER BY order_by";
  return await db(sql, [userId, eventId]);
};
