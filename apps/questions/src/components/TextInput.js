import React from "react";

const TextInput = ({ onChange, question, error }) => {
  let placeholder = question.required ? "Required" : "";
  let className = "form-control";

  // only allow numbers, no decimals, dashes, etc
  let handleChange = e => {
    if (question.type === "number") {
      var charCode = e.which;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return e.preventDefault();
      }
    }
  };

  if (error) className = className + " is-invalid";
  return (
    <div className="col-sm-6">
      <input
        type={question.type}
        className={className}
        name="response"
        value={question.response}
        onKeyPress={handleChange}
        onChange={onChange}
        placeholder={placeholder}
        min="0"
      />
    </div>
  );
};

export default TextInput;
