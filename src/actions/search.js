import { UPDATE_SEARCH_RESULT } from './types';

export const updateSearchResult = (value, page) => ({
  type: UPDATE_SEARCH_RESULT,
  value,
  page
});
