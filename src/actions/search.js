import { UPDATE_SEARCH_RESULT, ADVANCED_SEARCH } from './types';

export const updateSearchResult = (result) => dispatch => dispatch({
  type: UPDATE_SEARCH_RESULT,
  result
});
