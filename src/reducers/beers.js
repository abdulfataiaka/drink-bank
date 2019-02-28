import { updateHomeBeerIds } from './helper';

import {
  BEERS_FETCH_SUCCESS,
  BEERS_FETCH_LOADING,
  BEERS_FETCH_FAILURE,
  UPDATE_HOME_BEERS,
  UPDATE_FAVOURITES
} from '../actions/types';

import { updateFavourites } from './helper';

// beers is set to false if all beers fetch fails
// beers is set to null if all beers fetch is in progress
const initial = {
  beers: {},
  beerIds: [],
  homeBeerIds: [],
  favouritesBeerIds: []
}

export default (state = initial, action) => {
  switch(action.type) {
    case UPDATE_FAVOURITES: return {
      ...state,
      favouritesBeerIds: updateFavourites(
        state.favouritesBeerIds,
        action.id, action.add
      )
    }

    case UPDATE_HOME_BEERS: return {
      ...state,
      homeBeerIds: updateHomeBeerIds(
        state.beerIds,
        state.homeBeerIds
      )
    }

    case BEERS_FETCH_SUCCESS: return {
      ...state,
      beers: { ...action.beers },
      beerIds: Object.keys(action.beers)
    }

    case BEERS_FETCH_FAILURE: return {
      ...state,
      beerIds: false,
    }

    case BEERS_FETCH_LOADING: return {
      ...state,
      beerIds: null
    }

    default: return state;
  }
}
