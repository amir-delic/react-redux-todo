import { ADD_TODO, DELETE_TODO, UPDATE_TODO, EDIT_TODO } from "./todoTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const updateTodo = (id, todo) => {
  return {
    type: UPDATE_TODO,
    id: id,
    payload: todo,
  };
};

export const editTodo = (todoId) => {
  return {
    type: EDIT_TODO,
    payload: todoId,
  };
};
