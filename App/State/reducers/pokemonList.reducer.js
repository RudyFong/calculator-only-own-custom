import {SAVE_POKEMON_LIST, CLEAR_POKEMON_LIST} from '../actions/index.actions';

export default function pokemonList (state = [], action) {
  switch (action.type) {
    case SAVE_POKEMON_LIST: {
      return [...state, ...action.payload];
    }
    case CLEAR_POKEMON_LIST: {
      return [];
    }
    default: {
      return state;
    }
  }
}
