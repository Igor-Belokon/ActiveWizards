import React from "react";
import { connect } from "react-redux";
import "../style.css";
import { deleteCourse } from "../../store/action/data";
class DeleteButton extends React.Component {
  delete = () => {
    this.props.deleteCourse(this.props.id);
    console.log("card deleted");
  };

  render() {
    return (
      <div className="cardButton" onClick={this.delete}>
        D
      </div>
    );
  }
}
export default connect(null, { deleteCourse })(DeleteButton);
//
