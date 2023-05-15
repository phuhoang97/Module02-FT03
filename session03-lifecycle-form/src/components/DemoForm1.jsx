import React, { Component } from "react";

export default class DemoForm1 extends Component {
  constructor() {
    super();
    this.state = {
      course: "ReactJS",
    };
  }

  handleChange = (e) => {
    this.setState({ course: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Khóa học của bạn chọn là: " + this.state.course);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Xử lý form với select option</h2>
          <select onChange={this.handleChange}>
            <option value='ReactJS'>ReactJS</option>
            <option value='HTML'>HTML</option>
            <option value='JS'>JS</option>
            <option value='CSS'>CSS</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
