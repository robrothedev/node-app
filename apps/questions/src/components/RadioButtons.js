import React from "react";
import RadioInput from "./RadioInput";

/**
 * Group of radio button inputs for the question
 *
 * @param {Object} question
 * @param {Callable} onChange Parent event handler
 */

const RadioButtons = ({ error, question, onChange }) => {
  // create ids for label/input ties
  let inputId = question.question_id + "y";
  let inputId2 = question.question_id + "n";
  return (
    <div className="radio-buttons">
      <RadioInput
        error={error}
        id={inputId}
        question={question}
        onChange={onChange}
        checked={question.response === "Yes"}
        value="Yes"
        label="Yes"
        required
      />
      <RadioInput
        error={error}
        id={inputId2}
        question={question}
        onChange={onChange}
        value="No"
        checked={question.response === "No"}
        label="No"
        required
      />
      {question.required && <span className="required">(Required)</span>}
      {error && <div className="invalid-feedback">Required</div>}
    </div>
  );
};

export default RadioButtons;
