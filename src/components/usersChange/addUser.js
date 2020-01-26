import React from "react";
import { connect } from "react-redux";
import "../style.css";
import { addUser } from "../../store/action/data";

class AddButton extends React.Component {
  Add = () => {
    var userTitle = prompt("Enter title");
    var courseId = prompt("Enter title");
    var Id = prompt("Enter id");
    const user = {
      username: userTitle,
      curseId: courseId,
      id: Id
    };
    this.props.addUser(user);
  };

  render() {
    return <div onClick={this.Add}>+User</div>;
  }
}
export default connect(null, { addUser })(AddButton);
//
