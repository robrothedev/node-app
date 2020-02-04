import React from "react";
import QuestionItem from "./QuestionItem";

/**
 * Iterates over the questions and returns a child component
 *
 * @param {Array} questions
 * @param {Callable} handleResponse
 */

const Questions = ({ errors, questions, handleResponse }) => {
  return questions.map(q => {
    return (
      <QuestionItem
        errors={errors}
        key={q.question_id}
        question={q}
        parentCallBack={handleResponse}
      />
    );
  });
};

export default Questions;
