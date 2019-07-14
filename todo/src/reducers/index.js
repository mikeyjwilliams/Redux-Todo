import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/index';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let { todos } = state;
      const todo = action.payload;
      const newTodos = [...todos, todo];
      return { todos: newTodos };

    case TOGGLE_COMPLETE:
      // const id = state;
      const { todoList } = action.payload;
      console.log(todoList);
      break;
    default:
      return state;
  }
};
