const didUserRespondToQuestion = require("../responses/didUserRespondToQuestion");
const createResponse = require("../responses/createResponse");
const updateResponse = require("../responses/updateResponse");
const sanitizeHtml = require("sanitize-html");

module.exports = async (questions, userId) => {
  let finalResults = await Promise.all(questions.map(async q => {
    // creates a new object for the query
    let response = sanitizeHtml(q.response);
    let values = {
      question_id: q.question_id,
      response: response.trim(),
      user_id: userId
    };

    // find out if it's been answered already
    let responseId = await didUserRespondToQuestion(q.question_id, userId);
    let finalResponse;

    // response has been answered so just update it
    if (responseId) {
      finalResponse = await updateResponse(values, responseId);

      // create a new response
    } else {
      finalResponse = await createResponse(values);
    }

    return finalResponse;
  }));

  return finalResults;
};