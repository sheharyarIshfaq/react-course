import React, { Component, Fragment } from "react";

import Users from "./Users";
import ErrorBoundry from "./ErrorBoundry";
import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.searchTerm !== this.state.searchTerm)
      {
        this.setState({
            filteredUsers: DUMMY_USERS.filter((user) =>
              user.name.includes(this.state.searchTerm)
            ),
          });
      }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundry>
        <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </Fragment>
    );
  }
}


export default UserFinder;
