import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import pokemonnList from './pokemonList.reducer';
import pokemonPagination from './pokemonPagination.reducer';
import mypokemonList from './myPokemonList.reducer';
import currencyYen from './currencyYen.reducer';
import parcelPrice from './parcelListprice.reducer';
import statisticList from './statisticList.reducer';

const appReducers = combineReducers({
  form: formReducer,
  pokemonnList,
  pokemonPagination,
  mypokemonList,
  currencyYen,
  parcelPrice,
  statisticList,
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
