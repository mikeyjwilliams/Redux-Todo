import { ADD_TODO } from '../actions/index';

const initialState = {
  value: '',
  completed: false,
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
