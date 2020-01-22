import React from "react";
import "../style.css";
import UserLine from "./userLine.js";
import Main from "../main/main";

import { connect } from "react-redux";

import { getUsers } from "../../store/selectors/selectors";

class Courses extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(users => (
          <UserLine users={users}></UserLine>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { users: getUsers(state) };
}
export default connect(mapStateToProps)(Courses);
