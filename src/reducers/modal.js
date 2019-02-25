import { SET_BEER_ID } from '../actions/types';

const initial = {
  beerId: null
}

export default (state = initial, action) => {
  switch(action.type) {
    case SET_BEER_ID: return {
      beerId: action.beerId
    }

    default: return state;
  }
}
