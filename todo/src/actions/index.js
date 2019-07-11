export const ADD_TODOS = 'ADD_TODOS';

export const addTodo = (todo, completed) => {
    return {
        type: ADD_TODOS,
        payload: {
            todo,
            completed,
        }
    }
}