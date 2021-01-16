import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.css'


import Home from './components/home';
import {counterReducer} from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(counterReducer)}>
    <Home />  
  </Provider>
  , document.getElementById('app'));
  
