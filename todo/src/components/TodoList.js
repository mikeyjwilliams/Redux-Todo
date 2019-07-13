import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodos } from '../actions/index';

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

  render() {
    const { todos } = this.props;
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.changeHandler}
            name="input"
          />
          <button type="submit">add to list</button>
        </form>
        {todos.map((todo, i) => {
          return (
            <p
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
  return { todos: state.todos };
};

const mapDispatchToProps = {
  addTodo: addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
