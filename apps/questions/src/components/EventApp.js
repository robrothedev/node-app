import React from "react";
import Event from "./Event";
import PostSuccess from "./PostSuccess";
import Questions from "./Questions";
import SubmitButton from "./SubmitButton";

/**
 * Child component to output the event and questions
 *
 * @param {Object} event
 * @param {Array} questions
 * @param {Callable} handleResponse
 */

const EventApp = ({
  errors,
  event,
  posted,
  questions,
  handleResponse,
  handleSubmit
}) => {
  let onSubmit = e => e.preventDefault();
  return (
    <div>
      <Event event={event} />
      {posted && <PostSuccess />}
      {!posted && (
        <div className="container">
          <div className="animated fadeInUp faster">
            <div className="card">
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  <Questions
                    questions={questions}
                    errors={errors}
                    handleResponse={handleResponse}
                  />
                  <SubmitButton onSubmit={handleSubmit} />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventApp;
