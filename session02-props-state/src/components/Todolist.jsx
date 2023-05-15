import React, { Component } from "react";

export default class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
      editingIndex: -1,
      editingText: "",
    };
  }
  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { text: this.state.newTodo, complete: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodo: "" });
  };

  handleDelete = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  handleComplete = (index) => {
    const todos = [...this.state.todos];
    todos[index].complete = !todos[index].complete;
    this.setState({ todos });
  };

  //  Edit
  handleEdit = (index) => {
    this.setState({
      editingIndex: index,
      editingText: this.state.todos[index].text,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const todos = [...this.state.todos];
    todos[this.state.editingIndex].text = this.state.editingText;
    this.setState({ todos, editingIndex: -1, editingText: "" });
  };

  handleCancel = () => {
    this.setState({ editingIndex: -1, editingText: "" });
  };

  render() {
    return (
      <div>
        <h1>Todo - List</h1>
        {console.log(this.state.todos)}
        {this.state.editingIndex > -1 ? (
          <form onSubmit={this.handleUpdate}>
            <input
              type='text'
              placeholder='Update To Do ...'
              onChange={(e) => this.setState({ editingText: e.target.value })}
              value={this.state.editingText}
            />
            <button type='submit'>Update</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </form>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='New To Do ...'
              onChange={this.handleChange}
              value={this.state.newTodo}
            />
            <button type='submit'>Add</button>
          </form>
        )}
        <ul>
          {this.state.todos.map((element, index) => (
            <li key={index}>
              <input
                type='checkbox'
                checked={element.complete}
                onChange={() => this.handleComplete(index)}
              />
              <span
                style={{
                  textDecoration: element.complete ? "line-through" : "none",
                }}
              >
                {element.text}
              </span>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
              <button onClick={() => this.handleEdit(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
