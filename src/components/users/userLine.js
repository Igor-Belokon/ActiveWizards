import React from "react";
import "../style.css";

export default class UserLine extends React.Component {
  render() {
    return (
      <div className="course-line">
        <div className="course-item">{this.props.users.username}</div>
        <div className="course-item">{this.props.users.curseId}</div>
      </div>
    );
  }
}
