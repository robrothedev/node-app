import React from "react";
import Api from "../Api";
import TotalCard from "./TotalCard";
import YardGames from "./YardGames";
import socketIOClient from "socket.io-client";

class Totals extends React.Component {
  state = {
    totals: []
  };

  componentDidMount() {
    this.init();
    const socket = socketIOClient("https://rob.macpractice.net");
    socket.on("userSubmittedForm", () => this.init());
  }

  init = async () => {
    console.log("initing...");
    let totals = await Api.totals();
    this.setState({ totals: totals });
  };

  otherTotals = () => {
    let { totals } = this.state;
    return totals.totals.map(t => {
      return (
        <div className="col-sm-2" key={t.question_id}>
          <TotalCard title={t.question} total={t.total} />
        </div>
      );
    });
  };

  render() {
    let { totals } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <TotalCard title="Total People" total={totals.total} />
          </div>
          {totals.totals && this.otherTotals()}
        </div>
        <hr />
        {totals.yardGames && <YardGames responses={totals.yardGames} />}
      </div>
    );
  }
}

export default Totals;
