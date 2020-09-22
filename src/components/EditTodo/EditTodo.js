import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodo, editTodo } from "../../redux";
import "./EditTodo.css";

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: this.props.todo.todo,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.length > 0) {
      this.props.updateTodo(this.props.todo.id, this.state.todo);
    }
    //close modal
  };

  render() {
    return (
      <form className="EditTodo" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
          placeholder="Update todo"
        />

        <button className="btn btn-light" type="submit">
          Save
        </button>
        <button
          className="btn btn-dark"
          onClick={() => this.props.editTodo(this.props.todo.id)}
        >
          Cancel
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (id, todo) => dispatch(updateTodo(id, todo)),
    editTodo: (id) => dispatch(editTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(EditTodo);
