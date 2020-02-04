import React from "react";

const SubmitButton = ({ onSubmit }) => {
  return (
    <div className="row">
      <div className="col-sm-6" />
      <div className="col-sm-6">
        <button onClick={onSubmit} className="btn btn-block btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
