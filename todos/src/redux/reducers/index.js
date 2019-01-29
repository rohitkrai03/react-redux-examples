import { combineReducers } from 'redux';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter: visibilityFilter
});

export default todoApp;