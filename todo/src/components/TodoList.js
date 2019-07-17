import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

class TodoList extends Component {
  // toggleComplete = e => {
  // //  this.props.toggleComplete()
  // };

  render() {
    const todoItems = this.props.todos.map(todo => {
      return (
        <p key={todo.id} onClick={() => this.props.toggleComplete(todo.id)}>
          {' '}
          {todo.todo}
        </p>
      );
    });
    return (
      <div style={toggleComplete ? { textDecoration: 'line-through' } : null}>
        {todoItems}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  toggleComplete: toggleComplete
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
