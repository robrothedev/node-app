import React from "react";

const ResponseBarGraph = ({ users }) => {
  let totalResponses = () => {
    return users.filter(u => u.responded == true).length;
  };
  let percentage = Math.ceil((totalResponses() / users.length) * 100);

  let progressBar = {
    height: "32px",
    border: "1px solid #bbb",
    boxShadow: "inset #bbb -2px 2px 12px"
  };
  let barWidth = {
    width: percentage + "%",
    fontSize: 18
  };

  return (
    <div>
      <div className="progress" style={progressBar}>
        <div className="progress-bar bg-success" style={barWidth}>
          <div>
            {percentage}%{" "}
            <small className="ml-3">
              ({totalResponses()}/{users.length})
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseBarGraph;
