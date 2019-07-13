import { ADD_TODO } from '../actions/index';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { todos } = state;
      const todo = action.payload;
      const newTodos = [...todos, todo];
      return { todos: newTodos };
    default:
      return state;
  }
};
