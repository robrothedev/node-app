import React from "react";

/**
 * Individual input for radio buttons with div container
 *
 * @param {String} id Ties label to input
 * @param {Boolean} checked
 * @param {String} value
 * @param {String} label
 * @param {Object} question
 * @param {onChange} callable Updates the state when changed
 */

const RadioInput = ({
  id,
  error,
  checked,
  value,
  label,
  question,
  onChange
}) => {
  let className = "form-check-input";
  if (error) className = className + " is-invalid";
  return (
    <div className="form-check form-check-inline">
      <input
        className={className}
        type="radio"
        name={question.question_id}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
