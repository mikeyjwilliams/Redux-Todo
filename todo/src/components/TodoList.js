import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
  const { todos } = props;
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <p
            // onClick={this.toggleComplete}
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
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
