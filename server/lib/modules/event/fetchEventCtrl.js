const fetchEvent = require("./fetchEvent");
const fetchQuestions = require("../questions/fetchQuestions");

module.exports = async (req, res) => {
  let event = await fetchEvent(EVENT_ID);
  let questions = await fetchQuestions(req.user.user_id, EVENT_ID);

  // split event into to parts
  let descriptions = event.description.split("||");
  event.description = descriptions;

  return res.json({
    event: event,
    questions: questions
  });
};