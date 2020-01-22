import React from "react";
import "../style.css";

export default class CourseLine extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.courses.courseName}</div>
        <div>{this.props.courses.curseId}</div>
      </div>
    );
  }
}
