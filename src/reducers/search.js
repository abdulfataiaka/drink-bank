import { UPDATE_SEARCH_RESULT, ADVANCED_SEARCH } from '../actions/types';
import { advancedSearch } from './helper';

export default (state = null, action) => {
  switch(action.type) {
    case UPDATE_SEARCH_RESULT: return action.result;
    case ADVANCED_SEARCH: return advancedSearch(state, action.props)
    default: return state;
  }
}

