export const ADD_TODO = 'ADD_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';

export const addTodo = (todo, completed) => {
  console.log('payload', todo);
  return {
    type: ADD_TODO,
    payload: {
      todo
    }
  };
};

export const todoCompleteToggle = (todo, completed) => {};
