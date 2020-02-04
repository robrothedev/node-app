import React from "react";
import TextInput from "./TextInput";
import RadioButtons from "./RadioButtons";

/**
 * Handles each question from the loop
 *
 * @param {Object} question
 * @param {Callable} parentCallBack
 */

const QuestionItem = ({ errors, question, parentCallBack }) => {
  let onChange = e => {
    parentCallBack(question, e.target.value);
  };

  let error = errors.includes(question.question_id) ? true : false;
  return (
    <div className="form-group row">
      <label className="col-sm-6 col-form-label">
        {question.question}{" "}
        {question.required && <span className="required-asterisk">*</span>}
      </label>

      {/* text inputs */}
      {question.type != "yes_no" && (
        <TextInput onChange={onChange} question={question} error={error} />
      )}

      {/* radio buttons */}
      {question.type === "yes_no" && (
        <RadioButtons onChange={onChange} question={question} error={error} />
      )}
    </div>
  );
};

export default QuestionItem;
