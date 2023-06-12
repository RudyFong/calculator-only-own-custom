import * as actionCreators from '../actions/index.actions';
import { isEmpty, result , filter} from 'lodash';
import {set, get, storageKeys} from '../../Utils/storage.util';

export function getPokemonFromApi (name) {
  return (dispatch, getState) => {
    const state = getState();
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0').then((response) => response.json()).then((realResponse) => {
      const finalResult= result(realResponse, 'results', []);
      const nextPage = result(realResponse, 'next', '');
      const previousPage = result(realResponse, 'previous', '');
      dispatch(actionCreators.updatePokemonList(finalResult));
      dispatch(actionCreators.updatePokemonPagination({nextPage, previousPage}));
    }).catch(() => {
      
    });
  };
}

export function getDetailPokemonFromApi (data, navigateOption) {
  return (dispatch, getState) => {
    const state = getState();
    const namePoke = result(data, 'name', '')
    const pagination = 'https://pokeapi.co/api/v2/pokemon/' + namePoke;
    return fetch(pagination).then((response) => response.json()).then((realResponse) => {
      dispatch(navigateOption.navigation.navigate('DetailPokemon', {finalResult: realResponse}));
    }).catch(() => {
    });
  };
}

export function getPokemonFromApiContinue () {
  return (dispatch, getState) => {
    const state = getState();
    const nextPage = result(state, 'pokemonPagination.nextPage', '');
    const currentList = result(state, 'pokemonnList', []);
    return fetch(nextPage).then((response) => response.json()).then((realResponse) => {
      const finalResult= result(realResponse, 'results', []);
      const nextPage = result(realResponse, 'next', '');
      const previousPage = result(realResponse, 'previous', '');
      dispatch(actionCreators.updatePokemonList(finalResult));
      dispatch(actionCreators.updatePokemonPagination({nextPage, previousPage}));
    }).catch(() => {
      
    });
  };
}

export function savePokemonToBag (data) {
  return (dispatch, getState) => {
    const state = getState();
    const currentMyList = isEmpty(result(state, 'mypokemonList', [])) ? [] : result(state, 'mypokemonList', []);
    const finalBagPoke = [data, ...currentMyList];
    dispatch(actionCreators.updateMyPokemonList(finalBagPoke));
    set(storageKeys['MYLIST_POKEMON'], finalBagPoke).catch(() => {
        
    });
 
  };
}

export function loadPokemonToBag () {
  return (dispatch) => {
    get(storageKeys['MYLIST_POKEMON']).then((res) => {
    if(!isEmpty(res)){
      dispatch(actionCreators.updateMyPokemonList(res));
    }
    });
  };
}

export function deletePokemonToBag (nickName) {
  return (dispatch, getState) => {
    const state = getState();
    const currentMyList = isEmpty(result(state, 'mypokemonList', [])) ? [] : result(state, 'mypokemonList', []);
    const existingFilter = filter(currentMyList, function (val) {
      const nickNameTaken = result(val, 'nickName', '');
      return nickNameTaken !== nickName;
    });
    dispatch(actionCreators.updateMyPokemonList(existingFilter));
    set(storageKeys['MYLIST_POKEMON'], existingFilter).catch(() => {});
  };
}

export function loadCurrencyYen () {
  return (dispatch) => {
    get(storageKeys['CURRENT_YEN_CURRENCY']).then((res) => {
      console.log('isi dari res', res);
    if(res !== null){
      dispatch(actionCreators.saveCurrencyYen(res));
    } else {
      dispatch(actionCreators.saveCurrencyYen(140));
    }
    });
  };
}

export function loadCurrencyParcel () {
  return (dispatch) => {
    get(storageKeys['CURRENT_PARCEL_PRICE']).then((res) => {
      console.log('isi dari parel', res);
    if(res !== null){
      dispatch(actionCreators.saveCurrencyParcel(res));
    }else{
      dispatch(actionCreators.saveCurrencyParcel(300000));
    }
    });
  };
}

export function loadCurrencyStatistic () {
  return (dispatch) => {
    get(storageKeys['STATISTIC_PRICE']).then((res) => {
      console.log('isi dari statiscti', res);
    if(res !== null){
      dispatch(actionCreators.saveCurrentStatistic(res));
    } else{
      const data = [
        {
          minimalPrice: 0,
          maximalPrice: 49999,
          percentage: 85,
          id: 1
        },
        {
          minimalPrice: 50000,
          maximalPrice: 100000,
          percentage: 68,
          id: 2
        },
        {
          minimalPrice: 100001,
          maximalPrice: 300000,
          percentage: 48,
          id: 3
        },
        {
          minimalPrice: 300001,
          maximalPrice: 500000,
          percentage: 40,
          id: 4
        },
        {
          minimalPrice: 500001,
          maximalPrice: 1000000,
          percentage: 35,
          id: 5
        },
        {
          minimalPrice: 1000001,
          maximalPrice: 2000000,
          percentage: 25,
          id: 6
        },
        {
          minimalPrice: 2000001,
          maximalPrice: 3500000,
          percentage: 19,
          id: 7
        },
        {
          minimalPrice: 3500001,
          maximalPrice: 9500000,
          percentage: 15,
          id: 8
        },
      ]
      dispatch(actionCreators.saveCurrentStatistic(data));
    }
    });
  };
}

export function saveCurenycYen (data) {
  return (dispatch, getState) => {
    const realData = parseInt(data);
    console.log('isi dari', data);
    dispatch(actionCreators.saveCurrencyYen(realData));
    set(storageKeys['CURRENT_YEN_CURRENCY'], realData).catch(() => {
        
    });
 
  };
}

export function saveCurrencyParcel (data) {
  return (dispatch, getState) => {
    const realData = parseInt(data); 
    dispatch(actionCreators.saveCurrencyParcel(realData));
    set(storageKeys['CURRENT_PARCEL_PRICE'], realData).catch(() => {
        
    });
 
  };
}

export function saveCurrencyStatistic (data = []) {
  return (dispatch, getState) => {
    dispatch(actionCreators.saveCurrentStatistic(data));
    set(storageKeys['STATISTIC_PRICE'], data).catch(() => {
        
    });
 
  };
}