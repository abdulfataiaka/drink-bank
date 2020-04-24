import { updateHomeBeerIds } from './helper';

import {
  BEERS_FETCH_SUCCESS,
  BEERS_FETCH_LOADING,
  BEERS_FETCH_FAILURE,
  UPDATE_HOME_BEERS,
  UPDATE_FAVOURITES,
  UPDATE_SEARCH_BEERS
} from '../actions/types';

import { updateFavourites } from './helper';

// beers is set to false if all beers fetch fails
// beers is set to null if all beers fetch is in progress
const initial = {
  beers: {},
  beerIds: [],
  homeBeerIds: [],
  favouritesBeerIds: [],
  searchBeerIds: null
}

export default (state = initial, action) => {
  switch(action.type) {
    case UPDATE_FAVOURITES: return {
      ...state,
      favouritesBeerIds: updateFavourites(
        state.favouritesBeerIds,
        action.id
      )
    }

    case UPDATE_SEARCH_BEERS: return {
      ...state,
      searchBeerIds: action.ids
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
      beerIds: Object.keys(action.beers) // This is derivate storage, dont store things adjacent to things that you can derive it from, You are wasting memory, Computation is a strong suite of JS
    }

    case BEERS_FETCH_FAILURE: return {
      ...state,
      beerIds: false, // Even if you are not using typescript this is quite bad, marshalling booleans with arrays then with null is not a good idea, Your overkilling the variable, Just create a new variable to hold the failure state and just set the beerIds to []
    }

    case BEERS_FETCH_LOADING: return {
      ...state,
      beerIds: null // No Loading indicator
    }

    default: return state;
  }
}
