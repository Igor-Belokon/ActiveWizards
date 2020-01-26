import React from "react";
import "../style.css";
import DeleteButton from "../usersChange/deleteUser";

export default class UserLine extends React.Component {
  render() {
    return (
      <div className="course-line">
        <div className="course-item">{this.props.users.username}</div>
        <div className="course-item">{this.props.users.curseId}</div>
        <DeleteButton id={this.props.users.id}></DeleteButton>
      </div>
    );
  }
}
