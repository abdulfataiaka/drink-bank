import { UPDATE_SEARCH_RESULT, SET_QUERY_STRING } from '../actions/types';

const initial = {
  home: null,
  favourite: null
}

const updateSearchResult = (value, page) => {
  switch(page) {
    case true: return {
      home: value,
      favourite: value
    }

    case 'favourite': return {
      favourite: value
    }

    default: return {
      home: value
    }
  }
}

export default (state = initial, action) => {
  switch(action.type) {
    case UPDATE_SEARCH_RESULT: return {
      ...state,
      ...updateSearchResult(
        action.value,
        action.page
      )
    } 

    default: return state;
  }
}
