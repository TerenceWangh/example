import { SET_VISIBILITY_FILTER } from '../model/ActionTypes';
import { SHOW_ALL } from '../model/TodoFilters';

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter;