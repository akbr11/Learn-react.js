import React from "react";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "First Building Apps with React",
      result: "Created by Akbar",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default Title;
