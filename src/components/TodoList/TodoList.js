import React, { Component } from "react";
import Todo from "../Todo/Todo";
import { connect } from "react-redux";
import EditTodo from "../EditTodo/EditTodo";

import "./TodoList.css";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <ol>
          {this.props.todos.map((t) => {
            return t.isEdit ? (
              <EditTodo key={t.id} todo={t} />
            ) : (
              <Todo key={t.id} todo={t} />
            );
          })}
        </ol>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.tod.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
