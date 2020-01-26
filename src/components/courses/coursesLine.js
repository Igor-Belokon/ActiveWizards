import React from "react";
import "../style.css";
import DeleteButton from "../changeCourse/deleteCourse";
import { editCourse } from "../../store/action/data";
import { connect } from "react-redux";

class CourseLine extends React.Component {
  state = {
    content: false
  };
  onEdit = () => {
    this.setState({ content: !this.state.content });
  };
  onPress = event => {
    console.log("Event", event.key);
    if (event.key === "Enter") {
      let newTitle = event.target.innerText;

      this.props.editCourse(this.props.courses.id, newTitle);
      event.target.blur();
    }
  };

  render() {
    return (
      <div className="course-line">
        <div
          onKeyPress={this.onPress}
          contentEditable={this.state.content}
          className="course-item"
        >
          {this.props.courses.courseName}
        </div>
        <div className="course-item">{this.props.courses.id}</div>
        <div onClick={this.onEdit}>Edit</div>
        <DeleteButton id={this.props.courses.id}></DeleteButton>
      </div>
    );
  }
}

export default connect(null, { editCourse })(CourseLine);
