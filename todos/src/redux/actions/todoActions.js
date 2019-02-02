let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  };
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const completeAllTodo = () => {
  return {
    type: 'COMPLETE_ALL_TODO'
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
