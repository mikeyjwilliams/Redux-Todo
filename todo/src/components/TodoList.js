import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
  return (
    <div>
      <ul>
        <li>todo items</li>
      </ul>
    </div>
  );
}
export default connect()(TodoList);
