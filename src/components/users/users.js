import React from "react";
import "../style.css";
import UserLine from "./userLine.js";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { getUsers } from "../../store/selectors/selectors";

class Courses extends React.Component {
  state = {
    courses: false
  };
  myCourses = () => {
    this.setState({ courses: !this.state.courses });
  };
  render() {
    const { courses } = this.state;
    if (courses) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="header">
          <div className="header-button" onClick={this.myCourses}>
            Courses
          </div>
          <div className="header-button">Users</div>
        </div>
        <div className="course-container">
          {this.props.users.map(users => (
            <UserLine users={users}></UserLine>
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { users: getUsers(state) };
}
export default connect(mapStateToProps)(Courses);
