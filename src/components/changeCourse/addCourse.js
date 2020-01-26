import React from "react";
import { connect } from "react-redux";
import "../style.css";
import { addCourse } from "../../store/action/data";

class AddButton extends React.Component {
  Add = () => {
    var courseTitle = prompt("Enter title");
    var Id = prompt("Enter id");
    const course = {
      courseName: courseTitle,
      id: Id
    };
    this.props.addCourse(course);
  };

  render() {
    return <div onClick={this.Add}>+Course</div>;
  }
}
export default connect(null, { addCourse })(AddButton);
//
