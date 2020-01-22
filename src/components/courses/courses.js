import React from "react";
import "../style.css";
import CourseLine from "./coursesLine";

import Main from "../main/main";
import { connect } from "react-redux";

import { getCourses } from "../../store/selectors/selectors";

class Courses extends React.Component {
  render() {
    return (
      <div>
        {this.props.courses.map(courses => (
          <CourseLine courses={courses}></CourseLine>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { courses: getCourses(state) };
}
export default connect(mapStateToProps)(Courses);
