import React, { Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
   
    render() {
        return (
            <div>
              <form onSubmit={this.props.addTodo}>
                <input
                    type="text"
                    value="todo"
                    onChange={this.changeHandler}
                    name={this.props.todos}
                />
                <button type="submit">add to list</button>
              </form>
            </div>
        )
    }
}

const mapStateToProps = (todos) => {
  return {
    todos: this.state.todos,

  }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);