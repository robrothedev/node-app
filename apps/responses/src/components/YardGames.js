import React from "react";

const YardGames = ({ responses }) => {
  let userResponses = responses.map(r => {
    return (
      <div>
        <strong>{r.name}</strong>: {r.response}
      </div>
    );
  });

  return (
    <div className="card">
      <h5 className="card-header">Yard Game Responses</h5>
      <div className="card-body">{userResponses}</div>
    </div>
  );
};

export default YardGames;
