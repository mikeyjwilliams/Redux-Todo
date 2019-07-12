import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      completed: false,
      todos: []
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

    const { todo, completed } = this.state;
    this.props.addTodo(todo, completed);
    this.setState({
      todo: ''
    });
  };

  render() {
    const { todo } = this.state;
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={todo}
            onChange={this.changeHandler}
            name="todo"
          />
          <button type="submit">add to list</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo,
    completed: state.completed
  };
};

const mapDispatchToProps = {
  addTodo: addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
