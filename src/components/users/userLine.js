import React from "react";
import "../style.css";

export default class UserLine extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.users.username}</div>
        <div>{this.props.users.curseId}</div>
      </div>
    );
  }
}
