import React from "react";

class Hello extends React.Component {
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

export default Hello;
