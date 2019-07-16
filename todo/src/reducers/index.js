import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/index';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let { todos } = state;
      const todo = action.payload;

      let id = Math.random()
        .toString(36)
        .substring(2);
      let theTodo = { todo: todo, id: id, complete: false };

      const newTodos = todos.concat([theTodo]);
      console.log('ADD_TODO', newTodos);
      return { todos: newTodos };

    case TOGGLE_COMPLETE:
      const todoItemList = action.payload;
      console.log('togglePayload', todoItemList);

      const toggle = todoItemList.find(item => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item.todo;
      });
      console.log(toggle);
      // const toggleTodos = [...newTodos, toggle];
      // return { todos: toggleTodos };
      break;
    default:
      return state;
  }
};
