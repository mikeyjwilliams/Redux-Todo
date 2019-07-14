export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = todo => {
  let id = Math.random()
    .toString(36)
    .substring(2);
  let obj = { todo: todo, id: id, complete: false };

  return {
    type: ADD_TODO,
    payload: obj
  };
};

export const toggleComplete = (id) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
  
};
