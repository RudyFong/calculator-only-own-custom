import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as actionCreators from '../State/actions/index.actions';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import PokeDetailComponent from '../Component/EditCurrency.component';
import {saveCurenycYen, saveCurrencyParcel} from '../State/function/generalFunction';

class PokeDetailScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    currencyYen: PropTypes.number,
    parcelPrice: PropTypes.number,
    saveCurenycYen: PropTypes.func,
    saveCurrencyParcel: PropTypes.func,
  }


  render() {
      const {navigation, currencyYen, parcelPrice, saveCurenycYen, saveCurrencyParcel} = this.props;

    return (
      <PokeDetailComponent navigation={navigation} parcelPrice={parcelPrice} currencyYen={currencyYen}
      saveCurenycYen={saveCurenycYen} saveCurrencyParcel={saveCurrencyParcel}/>
    );
  }
}

const mapStateToProps = (state) => {
  const pokemonListOwn = result(state,'mypokemonList', []);
  const currencyYen = result(state, 'currencyYen', 0);
  const parcelPrice = result(state, 'parcelPrice', 0);
  return {
    currencyYen,
    parcelPrice,
  };
};
const mapDispatchToProps = (dispatch) => ({
  saveCurenycYen: (data) => dispatch(saveCurenycYen(data)),
  saveCurrencyParcel: (data) => dispatch(saveCurrencyParcel(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailScreen);