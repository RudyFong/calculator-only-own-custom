import {SAVE_STATISTIC_LIST, CLEAR_STATISTIC_LIST} from '../actions/index.actions';

export default function mypokemonList (state = [], action) {
  switch (action.type) {
    case SAVE_STATISTIC_LIST: {
      return action.payload;
    }
    case CLEAR_STATISTIC_LIST: {
      return [];
    }
    default: {
      return state;
    }
  }
}
