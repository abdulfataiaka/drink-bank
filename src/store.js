import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import reducers from './reducers';

export default (initial) => createStore(
  reducers,
  initial,
  applyMiddleware(thunk)
);
