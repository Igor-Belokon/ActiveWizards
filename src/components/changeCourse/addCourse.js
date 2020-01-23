import React from "react";
import { connect } from "react-redux";
import "../style.css";
import { addCourse } from "../../store/action/data";

class AddButton extends React.Component {
  Add = () => {
    var courseTitle = prompt("Enter title");
    var courseId = prompt("Enter id");
    this.props.addCourse(courseTitle, courseId);
  };

  render() {
    return <div onClick={this.Add}>+</div>;
  }
}
export default connect(null, { addCourse })(AddButton);
//
