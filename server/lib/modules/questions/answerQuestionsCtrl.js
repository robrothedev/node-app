/**
 * Controller to handle posting responses to a question
 *
 * We need to first find out if the user has already answered the question.
 * If so, we need to update the record, otherwise create a new record for
 * each response
 */

const handleResponses = require("modules/responses/handleResponses");
const fetchQuestions = require("./fetchQuestions");
const validate = require("modules/responses/validate");

module.exports = async (req, res) => {
  let questions = req.body;
  let userId = req.user.user_id;
  let eventId = req.eventId;

  // checked required fields
  let errors = await validate(questions);
  if (errors.length) return res.json({ errors: errors });

  // no errors
  await handleResponses(questions, userId);
  let updatedQuestions = await fetchQuestions(userId, eventId);

  req.io.emit("userSubmittedForm", userId);
  return res.json({ posted: true, questions: updatedQuestions });
};