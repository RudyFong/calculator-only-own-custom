import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {result} from 'lodash';
import styles from './ViewStatistic.styles';
import {formatNumber} from '../Utils/transformer.util';
import DeleteIcon from '../Asset/deleteIcon.png';

class HomeScreenComponent extends React.Component {
  static propTypes = {
    statisticList: PropTypes.array,
    navigation: PropTypes.object
  }

  goToViewStatistic = (dataStatistic) => () => {
    this.props.navigation.navigate('EditDetailStatistic', {dataStatistic});
  }
  
  renderMappingPokemon = (data) => {

    const percentage = result(data, 'percentage', 0);
    const minimalPrice = result(data, 'minimalPrice', '');
    const maximalPrice = result(data, 'maximalPrice');
    return (
      <View key={result(data, 'id', 0)} style={{marginVertical: 8, borderRadius: 10, borderColor: 'grey', borderWidth: 1, padding: 8, flexDirection: 'row', justifyContent: 'space-between'}}> 
        <View>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>Harga Minimal : Rp {formatNumber(minimalPrice)}</Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>Harga Maximal : Rp {formatNumber(maximalPrice)}</Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>Percent untung : {percentage} %</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={this.goToViewStatistic(data)} style={{paddingHorizontal: 25, paddingVertical: 8, backgroundColor: 'black', borderRadius: 10}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }



  render () {
    const {statisticList = []} = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.titleText}>Statistic Percentage</Text>
        </View>
        <View style={{padding: 10}}>
        {statisticList.map(this.renderMappingPokemon)}
        </View>
      </ScrollView>
    );
  }
}





export default HomeScreenComponent;