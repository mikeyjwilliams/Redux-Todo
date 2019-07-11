export const ADD_TODOS = 'ADD_TODOS';

export const ADD_TODO = (todo, completed) => {
    return {
        type: ADD_TODOS,
        payload: {
            todo,
            completed,
        }
    }
}