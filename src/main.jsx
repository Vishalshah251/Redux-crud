// src/index.js (or main.js if using Vite)

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './reducer';
import App from './App';

// Create the Redux store
const store = createStore(counterReducer);

// Wrap your App component with Provider and pass the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
