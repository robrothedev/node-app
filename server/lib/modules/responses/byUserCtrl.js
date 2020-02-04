const db = require("libs/db");
module.exports = async (req, res) => {
  let userId = req.params.userId;
  let responses = await db("SELECT question.question_id, question, IF (response != '',response,'') as response FROM question LEFT JOIN response ON (response.question_id = question.question_id AND user_id = ?) WHERE question.event_id = ? GROUP BY question.question_id ORDER BY order_by", [userId, 5]);
  return res.json(responses);
};