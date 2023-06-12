import {createAction} from 'redux-actions';

// ==================
//  ACTION CONSTANTS
// ==================
// FEEDBACK Action constants

// save pokemon list
export const SAVE_POKEMON_LIST = 'SAVE_POKEMON_LIST';
export const CLEAR_POKEMON_LIST = 'CLEAR_POKEMON_LIST';

// save pokemon pagination
export const SAVE_POKEMON_PAGINATION = 'SAVE_POKEMON_PAGINATION';
export const CLEAR_POKEMON_PAGINATION = 'CLEAR_POKEMON_PAGINATION';

// save to my bag pokemon
export const SAVE_MYPOKEMON_LIST = 'SAVE_MYPOKEMON_LIST';
export const CLEAR_MYPOKEMON_LIST = 'CLEAR_MYPOKEMON_LIST';

export const SAVE_CURRENCY_YEN = 'SAVE_CURRENCY_YEN';
export const CLEAR_CURRENCY_YEN = 'CLEAR_CURRENCY_YEN';

export const SAVE_CURRENCY_PARCEL = 'SAVE_CURRENCY_PARCEL';
export const CLEAR_CURRENCY_PARCEL = 'CLEAR_CURRENCY_PARCEL';

export const SAVE_STATISTIC_LIST = 'SAVE_STATISTIC_LIST';
export const CLEAR_STATISTIC_LIST = 'CLEAR_STATISTIC_LIST';

// =================
//  ACTION CREATORS
// =================


// action save list pokemon
export const updatePokemonList = createAction(SAVE_POKEMON_LIST);
export const clearPokemonList = createAction(CLEAR_POKEMON_LIST);

// action save pagination pokemon
export const updatePokemonPagination = createAction(SAVE_POKEMON_PAGINATION);
export const clearPokemonPagination = createAction(CLEAR_POKEMON_PAGINATION);

// action save to bag
export const updateMyPokemonList = createAction(SAVE_MYPOKEMON_LIST);
export const clearMyPokemonList = createAction(CLEAR_MYPOKEMON_LIST);

export const saveCurrencyYen = createAction(SAVE_CURRENCY_YEN);
export const clearCurrencyYen = createAction(CLEAR_CURRENCY_YEN);

export const saveCurrencyParcel = createAction(SAVE_CURRENCY_PARCEL);
export const clearCurrencyParcel = createAction(CLEAR_CURRENCY_PARCEL);

export const saveCurrentStatistic = createAction(SAVE_STATISTIC_LIST);
export const clearCurrentStatistic = createAction(CLEAR_STATISTIC_LIST);
