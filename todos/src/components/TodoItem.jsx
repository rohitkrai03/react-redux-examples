import React from 'react';

const TodoItem = ({ text, completed, toggleTodo, removeTodo }) => {
  return (
    <li
      className={ completed ? 'completed' : '' }
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={toggleTodo}
        />
        <label onClick={toggleTodo}>
          {text}
        </label>
        <button className="destroy" onClick={removeTodo} />
			</div>
    </li>
  )
}

export default TodoItem;