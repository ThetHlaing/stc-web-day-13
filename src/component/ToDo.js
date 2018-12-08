import React from "react";

class ToDo extends React.Component {
  render() {
    return (
      <li
        style={{
          textDecoration: this.props.item.complete ? "line-through" : "none"
        }}
        onClick={this.props.onClick}
      >
        {this.props.item.text}
      </li>
    );
  }
}

export default ToDo;
