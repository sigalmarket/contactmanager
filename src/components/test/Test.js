import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    console.log("Component Did Mount");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentWillUpdate() {
    console.log("Component will update");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("component will receive props");
  }

  render() {
    console.log("render");
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test comp {title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
