import { ADD_TODO } from '../actions/index';

const initialState = {
  todo: '',
  completed: false,
  todos: []
};

export default (state = initialState, action) => {
  console.log('state', state);
  switch (action.type) {
    case ADD_TODO:
      // const { todo } = this.state;
      const { anotherTodo } = action.payload;
      // //const newTodo = state.todos.concat([newState]);
      // console.log(anotherTodo);
      console.log('firing');
      console.log('payload', anotherTodo);
      console.log('action.type', action.type);
      break;
    // return {
    //   ...state,
    //   todos: newTodo
    // };
    default:
      return state;
  }
};
