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

    this.props.toggleComplete(this.props.todos);
  };

  render() {
    const { todos } = this.props;
    const { id } = this.props;
    console.log('this.props render id', id);
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    toggleComplete: (state.id, state.todo, state.complete)
  };
};

const mapDispatchToProps = {
  addTodo: addTodo,
  toggleComplete: toggleComplete
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
