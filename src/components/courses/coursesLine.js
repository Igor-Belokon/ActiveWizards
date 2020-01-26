import React from "react";
import "../style.css";
import DeleteButton from "../changeCourse/deleteCourse";
import { editCourse } from "../../store/action/data";

export default class CourseLine extends React.Component {
  state = {
    content: false
  };
  onEdit = () => {
    this.setState({ content: !this.state.content });
  };
  render() {
    return (
      <div className="course-line">
        <div contentEditable={this.state.content} className="course-item">
          {this.props.courses.courseName.addEventListener("keypress", event => {
            if (event.key === "Enter") {
              let newTitle = event.target.innerText;

              editCourse({ newTitle });
            }
          })}
          ;
        </div>
        <div className="course-item">{this.props.courses.id}</div>
        <div onClick={this.onEdit}>Edit</div>
        <DeleteButton id={this.props.courses.id}></DeleteButton>
      </div>
    );
  }
}
