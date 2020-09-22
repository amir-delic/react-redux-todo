import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../../redux";
import "./Todo.css";

const Todo = (props) => {
  return (
    <li className="Todo">
      <span className="text"> {props.todo.todo}</span>
      <span className="icon">
        {" "}
        <i
          className="far fa-trash-alt"
          onClick={() => props.deleteTodo(props.todo.id)}
        ></i>
        <i
          className="fas fa-edit"
          onClick={() => props.editTodo(props.todo.id)}
        ></i>
      </span>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (id) => dispatch(editTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
