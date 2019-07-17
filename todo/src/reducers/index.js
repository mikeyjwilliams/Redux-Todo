import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/index';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  let { todos } = state; // grab todos in in all cases now.
  let id = Math.random()
    .toString(36)
    .substring(2);
  // able to grab id in all cases now.
  switch (action.type) {
    case ADD_TODO:
      const todo = action.payload;

      let theTodo = { todo: todo, id: id, complete: false };

      const newTodos = todos.concat([theTodo]);
      console.log('ADD_TODO', newTodos);
      return { todos: newTodos };

    case TOGGLE_COMPLETE:
      const toggleId = action.payload;
      const toggle = todos.map(todo => {
        if (todo.id === toggleId) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
      const toggledTodos = [...todos, toggle];
      return { todos: toggledTodos };
    default:
      return state;
  }
};
