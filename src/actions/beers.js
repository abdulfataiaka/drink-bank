import { fetchBeers } from '../api/beers';

import {
  BEERS_FETCH_LOADING,
  BEERS_FETCH_SUCCESS,
  BEERS_FETCH_FAILURE,
  SET_BEER_ID,
  UPDATE_HOME_BEERS,
  UPDATE_FAVOURITES
} from './types';

export const setBeerId = id => dispatch => dispatch({
  type: SET_BEER_ID,
  beerId: id || null
});

export const updateFavourites = id => dispatch => dispatch({
  type: UPDATE_FAVOURITES,
  id
});

export const setHomeBeers = () => dispatch => dispatch({
  type: UPDATE_HOME_BEERS
});

const getBeersLoad = () => ({
  type: BEERS_FETCH_LOADING
});

const getBeersSuccess = beers => ({
  type: BEERS_FETCH_SUCCESS,
  beers
});

const getBeersFail = () => ({
  type: BEERS_FETCH_FAILURE
});

export const getBeers = () => dispatch => {
  dispatch(getBeersLoad());
  fetchBeers().then(beers => {
    if (beers) {
      dispatch(getBeersSuccess(beers));
      dispatch(setHomeBeers());
    }
    
    else {
      dispatch(getBeersFail());
    }
  });
}
