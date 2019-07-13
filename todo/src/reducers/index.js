import { ADD_TODO } from '../actions/index';

const initialState = {
  todo: '',
  completed: false,
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { todos } = state;
      const { todo } = action.payload;
      const newTodos = [...todos, todo];
      console.log('payload', todo);
      console.log('state', todos);
      return {
        todos: newTodos
      };
    default:
      return state;
  }
};
