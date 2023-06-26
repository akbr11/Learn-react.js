import React from "react";

class State extends React.Component {
  /* Implementation components state */
  constructor() {
    super();
    this.state = {
      title: "Hello ",
      result: "Akbar",
    };
  }

  changeTitle = () => {
    this.setState({
      title: "Selamat Datang",
    });
  };

  /* End Implementation components state */

  render() {
    return (
      <div>
        <span>
          {this.state.title}, {this.state.result}
        </span>
        <button onClick={this.changeTitle}>Click</button>
      </div>
    );
  }
}

export default State;
