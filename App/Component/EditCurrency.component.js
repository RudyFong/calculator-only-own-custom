import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView, Modal, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {result, filter, random, size} from 'lodash';
import styles from './EditCurrency.styles';

import PokeBall from '../Asset/Pokeball.png';
import {formatNumber, removeDot} from '../Utils/transformer.util';

class HomeScreenComponent extends React.Component {
  static propTypes = {
    pokeData: PropTypes.object,
    parcelPrice: PropTypes.number,
    currencyYen: PropTypes.number,
    saveCurenycYen: PropTypes.func,
    saveCurrencyParcel: PropTypes.func,
  }
  state = {
    curencyYen: String(result(this.props, 'currencyYen', 0)),
    currencyParcel: String(result(this.props, 'parcelPrice', 0)),
  }
  onChangeTextYen=(newInput) => {
    const removeRealDot = removeDot(newInput);
    this.setState({curencyYen: removeRealDot});
  }
  onChangeTextParcel=(newInput) => {
    const removeRealDot = removeDot(newInput);
    this.setState({currencyParcel: removeRealDot});
  }
  onSave=() => {
    const {saveCurenycYen, saveCurrencyParcel, navigation} = this.props;
    saveCurenycYen(result(this.state, 'curencyYen', 0));
    saveCurrencyParcel(result(this.state, 'currencyParcel', 0));
    navigation.goBack();
  }

  render () {
    const {currencyYen, parcelPrice} = this.props;

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
          <Text style={{fontSize: 20, fontWeight: '600'}}>Convert harga per 1 {`\u00A5`}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 10}}>
          <View style={{backgroundColor: '#FFFFFF', height: 49, width: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Rp</Text>
          </View>
          <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangeTextYen}
            placeholder='example: 1000'
            value={formatNumber(this.state.curencyYen)}
            keyboardType={'number-pad'}
          />
        </View>
        <Text style={{fontSize: 14, fontWeight: '600'}}>{`\u2022`} current {`\u00A5`}1 = Rp {formatNumber(currencyYen)}</Text>
      </View>
      </View>
      <View style={{padding: 10}}>
      <View style={styles.containerPokeTitle}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Harga ongkir per 1000gram(1Kg)</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 10}}>
          <View style={{backgroundColor: '#FFFFFF', height: 49, width: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Rp</Text>
          </View>
          <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangeTextParcel}
            placeholder='example: 1000'
            value={formatNumber(this.state.currencyParcel)}
            keyboardType={'number-pad'}
          />
      </View>
        <Text style={{fontSize: 14, fontWeight: '600'}}>{`\u2022`} current 1000gr = Rp {formatNumber(parcelPrice)}</Text>
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