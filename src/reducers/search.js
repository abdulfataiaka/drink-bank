import { UPDATE_SEARCH_RESULT } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case UPDATE_SEARCH_RESULT: return action.result;
    default: return state;
  }
}
