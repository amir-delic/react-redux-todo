import { ADD_TODO, DELETE_TODO, UPDATE_TODO, EDIT_TODO } from "./todoTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.payload) {
            return { ...t, isEdit: !t.isEdit };
          }
          return t;
        }),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.id) {
            return { ...t, isEdit: false, todo: action.payload };
          }
          return t;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
