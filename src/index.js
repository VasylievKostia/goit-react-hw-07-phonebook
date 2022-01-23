import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { persistor } from './redux/store';
import { Provider } from 'react-redux';
// import { myAction } from './redux/actions';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
// console.log(store)
// console.log(store.dispatch(myAction))
ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor} loading={null}>
    <Provider store={store}>
      <App />
      </Provider>
      </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
