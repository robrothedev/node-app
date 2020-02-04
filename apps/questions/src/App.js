import React, { Component } from "react";
import "./App.css";
import Api from "./Api";
import Loading from "./components/Loading";
import EventApp from "./components/EventApp";

class App extends Component {
  state = {
    event: null,
    questions: [],
    posted: false,
    errors: []
  };

  componentDidMount() {
    this.init();
  }

  render() {
    let { event, questions, posted, errors } = this.state;

    return (
      <div className="container-fluid">
        {!event && <Loading />}
        {event && (
          <div>
            <img src="./CompanyPicnic.jpg" className="graphic" />
            <EventApp
              errors={errors}
              event={event}
              posted={posted}
              questions={questions}
              handleResponse={this.handleResponse}
              handleSubmit={this.handleSubmit}
            />
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------

  /**
   * Get the data from the api
   */
  init = async () => {
    let event = await Api.event();
    setTimeout(() => {
      this.setState({
        event: event.event,
        questions: event.questions
      });
    }, 2200);
  };

  /**
   * Called when inputs change to update the state
   *
   * @param {Object} Question from API
   * @param {String} Answer to the question
   */
  handleResponse = (questionObj, answer) => {
    let { questions } = this.state;
    let idx = questions.indexOf(questionObj);
    questions[idx].response = answer;
    this.setState({ questions: questions });
  };

  /**
   * Submits the state.questions to the API for posting
   */
  handleSubmit = async () => {
    let response = await Api.respond(this.state.questions);
    try {
      // handle a successful post
      if (response.posted) {
        this.setState({
          posted: true,
          questions: response.questions,
          errors: []
        });
        setTimeout(() => {
          this.setState({ posted: false });
        }, 3000);
        return;
      }

      if (response.errors) {
        this.setState({ errors: response.errors });
      }

      // not sure what went wrong :/
    } catch (e) {
      console.log("Something weird happened...");
      console.log(e);
    }
  };
}

export default App;
