import { combineReducers } from 'redux';
import beersReducer from './beers';
import searchReducer from './search';
import modalReducer from './modal';

export default combineReducers({
  beersReducer,
  searchReducer,
  modalReducer
});
