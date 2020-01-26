import React from "react";
import "../style.css";
import DeleteButton from "../usersChange/deleteUser";
import { editUser } from "../../store/action/data";
import { connect } from "react-redux";

class UserLine extends React.Component {
  state = {
    content: false
  };
  onEdit = () => {
    this.setState({ content: !this.state.content });
  };
  onPress = event => {
    if (event.key === "Enter") {
      let newTitle = event.target.innerText;

      this.props.editUser(this.props.users.id, newTitle);
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
          {this.props.users.username}
        </div>
        <div className="course-item">{this.props.users.id}</div>
        <div onClick={this.onEdit}>Edit</div>
        <DeleteButton id={this.props.users.id}></DeleteButton>
      </div>
    );
  }
}
export default connect(null, { editUser })(UserLine);
