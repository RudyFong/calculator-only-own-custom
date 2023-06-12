import {SAVE_POKEMON_PAGINATION, CLEAR_POKEMON_PAGINATION} from '../actions/index.actions';

export default function pokemonPagination (state = {}, action) {
  switch (action.type) {
  case SAVE_POKEMON_PAGINATION: {
    return action.payload;
  }
  case CLEAR_POKEMON_PAGINATION: {
    return {};
  }
  default: {
    return state;
  }
  }
}
