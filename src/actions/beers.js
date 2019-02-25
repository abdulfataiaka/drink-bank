import { fetchBeers } from '../api/beers';
import {
  BEERS_FETCH_LOADING,
  BEERS_FETCH_SUCCESS,
  BEERS_FETCH_FAILURE,
  SET_BEER_ID
} from './types';

export const setBeerId = id => dispatch => dispatch({
  type: SET_BEER_ID,
  beerId: id || null
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
    }
    
    else {
      dispatch(getBeersFail());
    }
  });
}
