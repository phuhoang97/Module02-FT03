import React, { Component } from "react";

export default class DemoLifecycle extends Component {
  constructor() {
    super();
    this.state = { name: "Hiếu cà mau", count: 1 };
    // console.log("1. Khởi tạo");
  }

  //   UNSAFE_componentWillMount() {
  //     console.log("2. Component will Mount");
  //   }

  //   componentDidMount() {
  //     console.log("4. Component Did Mount");
  //   }

  //   Giai đoạn updating
  UNSAFE_componentWillReceiveProps() {
    console.log("5. componentWillReceiveProps");
  }

  UNSAFE_shouldComponentUpdate() {
    console.log("6. shouldComponentUpdate");
  }

  UNSAFE_componentWillUpdate() {
    console.log("7. componentWillUpdate");
  }

  componentDidUpdate() {
    // Hàm này được gọi sau khi component re-render lại
    console.log("8. componentDidUpdate");
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  render() {
    console.log("3 .Render");
    return (
      <div>
        <h2>Lifecycle</h2>
        {/* <p>{this.state.count}</p> */}
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Up
        </button> */}
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.componentWillUnmount}>Clear</button> */}
      </div>
    );
  }
}
