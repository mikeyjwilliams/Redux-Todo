import React, { Component} from 'react';

class TodoForm extends Component {
   
    render() {
        return (
            <div>
              <form>
                <input
                    type="text"
                    value="todo"
                    onChange={this.changeHandler}
                    name="todos"
                />
                <button type="submit">add to list</button>
              </form>
            </div>
        )
    }
}
export default TodoForm;