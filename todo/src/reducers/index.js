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
      console.log('TOGGLE_COMPLETE payload', action.payload);
      // const todoId = ;
      // console.log('state id', todoId);
      const [payload] = action.payload;
      console.log(payload);
      const todoItemList = [payload];
      // console.log('TOGGLE_COMPLETE', todoItem, todoId, complete);

      const toggle = todoItemList.find(item => item.id === payload.id);
      console.log(toggle);

      // if (todoList.id === todoItem.id) {
      //   todoList.complete = !todoList.complete;
      // }
      // console.log('TOGGGLE_COMPLETE', todoList);
      // const newTodoList = [...todoList, todoList];
      // return { todos: newTodoList };
      break;
    default:
      return state;
  }
};
