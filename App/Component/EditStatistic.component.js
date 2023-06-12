import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView, Modal, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {result, filter, random, size} from 'lodash';
import styles from './EditStatistic.styles';

import PokeBall from '../Asset/Pokeball.png';
import {formatNumber, removeDot, mappingUpdatePercentage} from '../Utils/transformer.util';

class HomeScreenComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    getStatisticdata: PropTypes.object,
    savePercentage: PropTypes.func
  }
  state = {
    percentStatistic: String(result(this.props, 'getStatisticdata.percentage', 0)),
  }
  onChangeTextPercent=(newInput) => {
    const removeRealDot = removeDot(newInput);
    this.setState({percentStatistic: removeRealDot});
  }

  onSave = () => {
    const {statisticList, savePercentage, getStatisticdata} = this.props;
    const checkNewMapping = mappingUpdatePercentage(statisticList, result(getStatisticdata, 'id', 0), result(this.state, 'percentStatistic', 0));
    console.log('isi dari ini', checkNewMapping);
    savePercentage(checkNewMapping);
    // saveCurenycYen(result(this.state, 'curencyYen', 0));
    // saveCurrencyParcel(result(this.state, 'currencyParcel', 0));
    // navigation.goBack();
  }

  render () {
    const {getStatisticdata} = this.props;
    console.log('isi dari', this.props);
    return (
      <View contentContainerStyle={styles.bottomContainer}>

      {/* <View style={styles.containerSearch}>
        <View style={styles.containerSearchText}>
          <Text style={styles.searchText}>Search or Filter</Text>
        </View>
        <TextInput
          style={styles.textBoxSearch}
          onChangeText={this.onChangeText} placeholder='search poke by name'
        />
      </View> */}
      <View style={{padding: 10}}>
      <View style={styles.containerPokeTitle}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Masukkan percentage untung</Text>
          <Text style={{fontSize: 15, fontWeight: '600', paddingBottom: 10, paddingTop: 25}}>Detail</Text>
          <Text style={{fontSize: 17, fontWeight: '600', paddingVertical: 5}}>Min Price : Rp {formatNumber(result(getStatisticdata, 'minimalPrice', 0)) === '' ? '0' : formatNumber(result(getStatisticdata, 'minimalPrice', 0))}</Text>
          <Text style={{fontSize: 17, fontWeight: '600', paddingTop: 5, paddingBottom: 15}}>Max Price : Rp {formatNumber(result(getStatisticdata, 'maximalPrice', 0))}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 10}}>
          <View style={{backgroundColor: '#FFFFFF', height: 49, width: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>%</Text>
          </View>
          <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangeTextPercent}
            placeholder='example: 20'
            value={formatNumber(this.state.percentStatistic)}
            keyboardType={'number-pad'}
            // maxLength={3}
          />
        </View>
        <Text style={{fontSize: 14, fontWeight: '600'}}>{`\u2022`} current = {result(getStatisticdata, 'percentage', 0)}%</Text>
      </View>
      </View>

      <View style={{paddingHorizontal: 10, paddingVertical: 40}}>
      <TouchableOpacity onPress={this.onSave} style={{padding: 20,borderRadius: 10, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Save</Text>
      </TouchableOpacity>
      </View>
    </View>
    );
  }
}





export default HomeScreenComponent;