import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
import CreateTodo from "./containers/CreateTodo";
import Table from "./containers/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/src/styles/styles.scss";
import "react-awesome-button/src/styles/themes/theme-c137";

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f =>f)
(createStore)(MainReducer)

ReactDOM.render(
  <Provider store={store}>
    <Table />
    <CreateTodo />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
