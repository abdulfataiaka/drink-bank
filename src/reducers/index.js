import { combineReducers } from 'redux';
import beersReducer from './beers';
import searchReducer from './search';

export default combineReducers({
  beersReducer,
  searchReducer
});
