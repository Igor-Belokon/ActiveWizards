import React from "react";
import "../style.css";
import CourseLine from "./coursesLine";
import AddButton from "../changeCourse/addCourse";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { getCourses } from "../../store/selectors/selectors";

class Courses extends React.Component {
  state = {
    users: false
  };
  myUsers = () => {
    this.setState({ users: !this.state.users });
  };
  render() {
    const { users } = this.state;

    if (users) {
      return <Redirect to="/users" />;
    }
    return (
      <div>
        <div className="header">
          <div className="header-button">Courses</div>
          <div className="header-button" onClick={this.myUsers}>
            Users
          </div>
          <AddButton></AddButton>
        </div>
        <div className="course-container">
          {this.props.courses.map(courses => (
            <CourseLine courses={courses}></CourseLine>
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { courses: getCourses(state) };
}
export default connect(mapStateToProps)(Courses);
