import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo, completeAllTodo } from "../redux/actions";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  activeTodoCount,
  onToggleTodo,
  onRemoveTodo,
  onCompleteAllTodo
}) => {
  return (
    <div>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={onCompleteAllTodo}
        checked={activeTodoCount === 0}
      />
      <label htmlFor="toggle-all" />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={() => onToggleTodo(todo.id)}
            removeTodo={() => onRemoveTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const getActiveTodoCount = todos => {
  return todos.reduce((accum, todo) => {
    return todo.completed ? accum : accum + 1;
  }, 0);
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    activeTodoCount: getActiveTodoCount(state.todos)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: id => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: id => {
      dispatch(removeTodo(id));
    },
    onCompleteAllTodo: () => {
      dispatch(completeAllTodo());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
