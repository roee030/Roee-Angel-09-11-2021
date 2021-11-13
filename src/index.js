import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'redux/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";



const middleware = applyMiddleware(thunk);
const composeEnhancers = composeWithDevTools(middleware);

const store = createStore(
  rootReducer,
  composeEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

