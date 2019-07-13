export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const COMPLETED_TODO = 'COMPLETED_TODO';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const getTodos = todos => {
  return {
    type: GET_TODOS,
    payload: todos
  };
};

export const todoCompleteToggle = todo => {};
