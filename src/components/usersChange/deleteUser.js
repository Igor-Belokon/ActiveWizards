import React from "react";
import { connect } from "react-redux";
import "../style.css";
import { deleteUser } from "../../store/action/data";
class DeleteButton extends React.Component {
  delete = () => {
    this.props.deleteUser(this.props.id);
    console.log("card deleted");
  };

  render() {
    return <div onClick={this.delete}>D</div>;
  }
}
export default connect(null, { deleteUser })(DeleteButton);
//
