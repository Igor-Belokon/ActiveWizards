import React from "react";
import "../style.css";

import { Redirect } from "react-router-dom";

export default class Main extends React.Component {
  state = {
    users: false,
    courses: false
  };

  myUsers = () => {
    this.setState({ users: !this.state.users });
  };
  myCourses = () => {
    this.setState({ courses: !this.state.courses });
  };
  render() {
    const { users } = this.state;
    const { courses } = this.state;

    if (users) {
      return <Redirect to="/users" />;
    }
    if (courses) {
      return <Redirect to="/courses" />;
    }
    return (
      <div>
        <button onClick={this.myCourses}>Courses</button>
        <button onClick={this.myUsers}>Users</button>
      </div>
    );
  }
}
