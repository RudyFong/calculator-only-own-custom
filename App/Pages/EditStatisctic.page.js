import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as actionCreators from '../State/actions/index.actions';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import PokeDetailComponent from '../Component/EditStatistic.component';
import {saveCurrencyStatistic} from '../State/function/generalFunction';

class PokeDetailScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    statisticList: PropTypes.array,
  }


  savePercentage = (checkNewMapping) => {
    this.props.saveCurrencyStatistic(checkNewMapping);
    this.props.navigation.goBack();
  }

  render() {
      const {navigation, statisticList} = this.props;
      const getStatisticdata = result(this.props, 'route.params.dataStatistic', {});
      console.log('isi navigation', this.props);
    return (
      <PokeDetailComponent navigation={navigation} savePercentage={this.savePercentage} getStatisticdata={getStatisticdata} statisticList={statisticList}/>
    );
  }
}

const mapStateToProps = (state) => {
  const statisticList = result(state, 'statisticList', []);
  return {
    statisticList
  };
};
const mapDispatchToProps = (dispatch) => ({
  saveCurrencyStatistic: (data) => dispatch(saveCurrencyStatistic(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailScreen);