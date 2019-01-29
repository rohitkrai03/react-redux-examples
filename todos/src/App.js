import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './redux';
import TodoApp from './components/TodoApp';


class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
}

export default App;
