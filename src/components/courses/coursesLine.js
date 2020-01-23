import React from "react";
import "../style.css";
import DeleteButton from "../changeCourse/deleteCourse";

export default class CourseLine extends React.Component {
  render() {
    return (
      <div className="course-line">
        <div className="course-item">{this.props.courses.courseName}</div>
        <div className="course-item">{this.props.courses.id}</div>
        <DeleteButton id={this.props.courses.id}></DeleteButton>
      </div>
    );
  }
}
