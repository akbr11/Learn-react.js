import React from "react";

class Props extends React.Component {
  render() {
    return (
      <div>
        <small>{this.props.sender} : </small>
        <p>{this.props.content}</p>
        <hr />
      </div>
    );
  }
}

export default Props;
