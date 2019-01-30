import React from 'react';

const Todo = ({ onClick, text, completed }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      className={ completed ? 'completed' : '' }
    >
      { text }
    </li>
  )
}

export default Todo;