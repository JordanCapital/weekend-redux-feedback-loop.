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
}


const storeInstance = createStore(
    combineReducers({
      //list of reducers here
      feelingInfo,
      
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
