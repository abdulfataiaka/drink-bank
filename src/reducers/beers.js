import {
  BEERS_FETCH_SUCCESS,
  BEERS_FETCH_LOADING,
  BEERS_FETCH_FAILURE
} from '../actions/types';

const initial = {
  // false (fetch failed) | null (loading)
  beers: [],
  favourites: []
}

export default (state = initial, action) => {
  switch(action.type) {
    case BEERS_FETCH_SUCCESS: return {
      ...state,
      beers: [ ...action.beers ]
    }

    case BEERS_FETCH_FAILURE: return {
      ...state,
      beers: false
    }

    case BEERS_FETCH_LOADING: return {
      ...state,
      beers: null
    }

    default: return state;
  }
}
