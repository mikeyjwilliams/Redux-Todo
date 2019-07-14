import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../actions/index';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();

    const { input } = this.state;
    let todo = input;
    this.props.addTodo(todo);
    this.setState({
      input: ''
    });
  };

  toggleComplete = e => {
    console.log('id', this.props.id);
    this.props.toggleComplete(this.props.id);
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h2>The List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.changeHandler}
            name="input"
            placeholder="add item to to do list..."
          />
          <button type="submit">add to list</button>
        </form>
        <h3>Todo List:</h3>
        {todos.map((todo, i) => {
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
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos, toggleComplete: state.id };
};

const mapDispatchToProps = {
  addTodo: addTodo,
  toggleComplete: toggleComplete
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
