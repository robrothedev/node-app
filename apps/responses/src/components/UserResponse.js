import React from "react";

const UserResponse = ({ user, responses, onClose }) => {
  let responseList = responses.map(r => {
    return (
      <p key={r.question_id}>
        {r.question}
        <br />
        <strong>{r.response}</strong>
      </p>
    );
  });
  return (
    <div className="response-modal" tabIndex="-1">
      <div className="modal-window animated slideInDown faster">
        <div className="card">
          <div className="card-header">
            <span className="close-modal" onClick={onClose}>
              &times;
            </span>
            <h4>
              {user.firstname} {user.lastname}
            </h4>
          </div>
          <div className="card-body">{responseList}</div>
        </div>
      </div>
    </div>
  );
};

export default UserResponse;
