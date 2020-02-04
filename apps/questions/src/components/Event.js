import React from "react";

/**
 * Outputs event information
 *
 * @param {Object} events
 */

const Event = ({ event }) => {
  return (
    <div className="event-details">
      <h1 className="text-center">{event.title}</h1>
      <div className="row">
        <div className="col-sm-6">
          <pre>
            <span>{event.description[0]}</span>
          </pre>
        </div>
        <div className="col-sm-6">
          <pre>
            <span>{event.description[1]}</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Event;
