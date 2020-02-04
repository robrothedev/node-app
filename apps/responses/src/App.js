import React, { Component } from "react";
import "./App.css";
import UserList from "./components/UserList";
import Totals from "./components/Totals";
import socketIOClient from "socket.io-client";

class App extends Component {
  componentDidMount() {
    const socket = socketIOClient("");
    socket.on("testEvent", data => console.log("Socket", data));
  }
  render() {
    return (
      <div className="App container-fluid">
        <Totals />
        <hr />
        <UserList />
      </div>
    );
  }
}

export default App;
