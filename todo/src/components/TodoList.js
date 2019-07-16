import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    const todoItems = this.props.todos.map((todo, i) => {
      return <p key={i}> {todo.todo} </p>;
    });
    return <div>{todoItems}</div>;
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
