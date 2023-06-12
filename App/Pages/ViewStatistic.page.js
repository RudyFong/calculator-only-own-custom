import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../State/actions/index.actions';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import MyPokemonComponent from '../Component/ViewStatistic.component';
import {getDetailPokemonFromApi, deletePokemonToBag} from '../State/function/generalFunction';

class MyPokemon extends React.Component {
  static propTypes = {
    statisticList: PropTypes.array,
    navigation: PropTypes.object,
  }

  render() {
      const {statisticList, navigation} = this.props;
    return (
      <MyPokemonComponent  navigation={navigation} statisticList={statisticList}/>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon);