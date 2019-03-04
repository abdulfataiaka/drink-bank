import { UPDATE_SEARCH_RESULT, ADVANCED_SEARCH } from './types';

export const updateSearchResult = (result) => dispatch => dispatch({
  type: UPDATE_SEARCH_RESULT,
  result
});

export const advancedSearch = (props) => dispatch => dispatch({
  type: ADVANCED_SEARCH,
  props
});