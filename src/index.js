import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingInfo = (state=0, action) => {
  if (action.type === 'ADD_FEELING') {
    return action.payload;
  }
  return state;
};
const understandingInfo = (state=0, action) => {
  if (action.type === 'ADD_UNDERSTANDING') {
    return action.payload;
  }
  return state;
};
const supportInfo = (state=0, action) => {
  if (action.type === 'ADD_SUPPORT') {
    return action.payload;
  }
  return state;
};
const commentsInfo = (state = [], action) => {
  if(action.type === 'ADD_COMMENTS') {
    return action.payload;
  }
  return state;
};
const reviewInfo = (state = [], action ) => {
  if(action.type === 'ADD_FEEDBACK'){
    return action.payload;
  }
  return state;
}
const ClearInfo = (state = {}, action ) => {
  if(action.type === 'CLEAR_FEEDBACK') {
    return null;
  }
  return state;
}

const storeInstance = createStore(
    combineReducers({
      //list of reducers here
      feelingInfo,
      understandingInfo,
      supportInfo,
      commentsInfo,
      reviewInfo,
      ClearInfo,
      
    }),
    applyMiddleware(logger)
  );
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
              <App />
        </Provider>     
    </React.StrictMode>
);
