import React from "react";
import Api from "../Api";
import ResponseBarGraph from "./ResponseBarGraph";
import UserTable from "./UserTable";
import UserResponse from "./UserResponse";
import socketIOClient from "socket.io-client";

class UserList extends React.Component {
  state = {
    users: [],
    filteredUsers: [],
    user: null,
    userResponse: null
  };

  componentDidMount() {
    this.init();
    const socket = socketIOClient("https://rob.macpractice.net");
    socket.on("userSubmittedForm", () => this.init());
  }

  init = async () => {
    console.log("initing...");
    let users = await Api.users();
    this.setState({ users: users, filteredUsers: users });
  };

  showUserResponses = async user => {
    let userResponse = await Api.userResponse(user.user_id);
    this.setState({ userResponse: userResponse, user: user });
  };

  removeUserResponses = () => {
    this.setState({ userResponse: null, user: null });
  };

  filterUsers = e => {
    let keyword = e.target.value.replace(/[^A-Za-z]/g, "");
    let { users } = this.state;
    let filteredList = users.filter(u => {
      return (
        u.firstname.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        u.lastname.toLowerCase().search(keyword.toLowerCase()) !== -1
      );
    });
    this.setState({ filteredUsers: filteredList });
  };

  render() {
    let { users, filteredUsers, user, userResponse } = this.state;
    return (
      <div>
        {userResponse && (
          <UserResponse
            user={user}
            onClose={this.removeUserResponses}
            responses={userResponse}
          />
        )}
        {users.length > 0 && (
          <div className="card">
            <div className="card-header">
              <h5>User Responses</h5>
              <div className="card-search">
                <input
                  type="search"
                  placeholder="Filter user list..."
                  onChange={this.filterUsers}
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-body">
              <ResponseBarGraph users={filteredUsers} />
              <UserTable
                users={filteredUsers}
                showUserResponses={this.showUserResponses}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserList;
