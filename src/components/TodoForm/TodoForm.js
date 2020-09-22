import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux";
import { v4 as uuidv4 } from "uuid";

import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const tempTodo = { id: uuidv4(), isEdit: false, todo: this.state.todo };
    if (this.state.todo.length > 0) {
      this.props.addTodo(tempTodo);
    }
    this.setState({ todo: "" });
  };

  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <label>
          {" "}
          ENTER YOUR TODO:
          <input
            autoComplete="off"
            spellCheck="false"
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="new todo..."
          />
        </label>
        <button className="btn btn-dark" type="submit">
          SUBMIT
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
