import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add addTodo
      </button>
    </div>
  )
}

export default connect()(AddTodo);