export const ADD_TODO = 'ADD_TODO';
export const COMEPLETED_TODO = 'COMPLETED_TODO';

export const addTodo = (todo, completed) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
      completed
    }
  };
};

export const todoCompleteToggle = (todo, completed) => {};
