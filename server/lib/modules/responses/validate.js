module.exports = async (questions, userId) => {
  let errors = [];
  return new Promise(resolve => {
    questions.map(async q => {
      if (q.required == 1 && !q.response.trim()) {
        errors.push(q.question_id);
      }
    });
    resolve(errors);
  });
};