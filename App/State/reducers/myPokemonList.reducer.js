import {SAVE_MYPOKEMON_LIST, CLEAR_MYPOKEMON_LIST} from '../actions/index.actions';

export default function mypokemonList (state = [], action) {
  switch (action.type) {
    case SAVE_MYPOKEMON_LIST: {
      return action.payload;
    }
    case CLEAR_MYPOKEMON_LIST: {
      return [];
    }
    default: {
      return state;
    }
  }
}
