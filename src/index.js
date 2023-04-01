import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const userInfo = (state = {}, action) => {
    switch(action.type) {
        case "NEW_USER":
            case "NEW_USER":
      if (action.payload.feelings === 5) {
        console.log("User is feeling great!");
      } else {
        console.log("User is not feeling great.");
      }
      return {
        ...state,
        feedback: {
          feelings: action.payload.feelings,
          understanding: action.payload.understanding,
          support: action.payload.support,
          comments: action.payload.comments,
        },
      };
    default:
      return state;

    }
}


const storeInstance = createStore(
    combineReducers({
      //list of reducers here
      userInfo
      
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
