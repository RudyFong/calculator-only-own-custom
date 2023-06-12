import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import HomeScreenComponent from '../Component/CalculatorHome.component';
import {getDetailPokemonFromApi, getPokemonFromApiContinue, loadCurrencyYen, loadCurrencyParcel, loadCurrencyStatistic} from '../State/function/generalFunction';

class HomeScreen extends React.Component {
  static propTypes = {
    loadCurrencyYen: PropTypes.func,
    navigation: PropTypes.object,
    loadCurrencyParcel: PropTypes.func,
    loadCurrencyStatistic: PropTypes.func,
    parcelPrice: PropTypes.number,
    currencyYen: PropTypes.number,
    statisticList: PropTypes.array
  }

  componentDidMount = () => {
    this.props.loadCurrencyYen();
    this.props.loadCurrencyParcel();
    this.props.loadCurrencyStatistic();
  }
  getDetailPoke = (data) => () => {
    this.props.goToDetailPoke(data, this.props);
  }
t
  render() {
      const {navigation, parcelPrice, currencyYen, statisticList} = this.props;
    return (
      <HomeScreenComponent navigation={navigation} parcelPrice={parcelPrice} currencyYen={currencyYen} statisticList={statisticList}/>
    );
  }
}

const mapStateToProps = (state) => {
  const currencyYen = result(state, 'currencyYen', 0);
  const parcelPrice = result(state, 'parcelPrice', 0);
  const statisticList = result(state, 'statisticList', []);
  return {
    currencyYen,
    parcelPrice,
    statisticList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCurrencyYen: () => dispatch(loadCurrencyYen()),
  loadCurrencyParcel: () => dispatch(loadCurrencyParcel()),
  loadCurrencyStatistic: () => dispatch(loadCurrencyStatistic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);