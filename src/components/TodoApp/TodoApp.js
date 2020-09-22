import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <h1>Todo React-Redux App</h1>
        <hr></hr>
        <TodoForm />
        <br></br>
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
