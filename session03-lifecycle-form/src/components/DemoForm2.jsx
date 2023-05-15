import React, { Component } from "react";

export default class DemoForm2 extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      age: "",
      course: "ReactJS",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(` 
    Tên sinh viên là: ${this.state.studentName}
    Tuổi sinh viên là: ${this.state.age}
    Khóa học: ${this.state.course}
    `);
  };
  render() {
    return (
      <div>
        <h2>Form User</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Tên: </label>
          <input
            type='text'
            name='studentName'
            onChange={this.handleChange}
            value={this.state.studentName}
          />
          <br />
          <label>Tuổi: </label>
          <input
            type='text'
            name='age'
            onChange={this.handleChange}
            value={this.state.age}
          />
          <br />
          <label>Khóa học: </label>
          <select
            onChange={this.handleChange}
            value={this.state.course}
            name='course'
          >
            <option value='ReactJS'>ReactJS</option>
            <option value='HTML'>HTML</option>
            <option value='JS'>JS</option>
            <option value='CSS'>CSS</option>
          </select>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
