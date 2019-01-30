import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

let AddTodo = ({ dispatch }) => {
  let input;

  const handleNewTodoKeyDown = (e) => {
    if (e.keyCode !== 13) {
      return; // return without doing anything if any key other than enter is pressed;
    }
    dispatch(addTodo(input.value))
    input.value = '';
  }

  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        className='new-todo'
        placeholder='Whats on your mind?'
        onKeyDown={handleNewTodoKeyDown}
        ref={node => {
          input = node
        }}
      />
    </header>
  )
}

export default connect()(AddTodo);