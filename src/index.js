import './static/css/globals.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { applyMiddleware , createStore } from 'redux'
// import reduxLogger from "redux-logger"
import ReduxThunk from 'redux-thunk'
import rootReducer from './components/reducers'
import {userDataFetch} from './components/UsersDataFetch/UsersDataFetch.actions'


const showStore = store => next => action => {
  // console.log('dispatching', action)
  next(action)
  // console.log('New Store: ',store.getState())
  return 
}







const middleware = applyMiddleware(showStore, ReduxThunk);
const store = createStore(rootReducer, {}, composeWithDevTools(middleware) )
setTimeout(function(){ store.dispatch(userDataFetch()) }, 3000);
// store.dispatch(userDataFetch())

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>
  , document.querySelector('.main'));

