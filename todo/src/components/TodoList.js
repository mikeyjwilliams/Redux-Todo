import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
  // toggleComplete = e => {

  // };

  render() {
    const todoItems = this.props.todos.map((todo, id) => {
      return <p key={id}> {todo.todo}</p>;
    });
    return <div>{todoItems}</div>;
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
// const mapDispatchToProps = {
//   toggleComplete: toggleComplete
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(TodoList);
