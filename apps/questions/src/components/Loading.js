import React from "react";

/**
 * Displayed when fetching data from the api
 */

const Loading = () => {
  return (
    <div className="loading">
      <img src="./yogi.png" className="yogi" />
      <h4>finding pic-a-nic baskets...</h4>
    </div>
  );
};

export default Loading;
