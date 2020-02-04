import React from "react";

const TotalCard = ({ title, total }) => {
  return (
    <div className="card total-title">
      <div className="card-header text-white bg-info">{title}</div>
      <div className="card-body">
        <p className="card-text total">{total}</p>
      </div>
    </div>
  );
};

export default TotalCard;
