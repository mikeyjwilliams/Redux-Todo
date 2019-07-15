import React from 'react';
import { connect } from 'react-redux';

function TodoList(props)  {
return (
    {
        todos.map((todo, i) => {
            return (
                <p
                    onClick={this.toggleComplete}
                    key={i}
                    style={
                        todo.complete
                            ? { textDecoration: 'line-through', color: 'red' }
                            : null
                    }
                >
                    {todo.todo}
                </p>
            );
        })
    }
 )
}
export default TodoList;