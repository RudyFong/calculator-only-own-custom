import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {result, toLower, find} from 'lodash';
import styles from './CalculatorHome.styles';
import {formatNumber, removeDot} from '../Utils/transformer.util';

class HomeScreenComponent extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    parcelPrice: PropTypes.number,
    currencyYen: PropTypes.number,
    statisticList: PropTypes.array,
  }
  state = {
    currencyYen: '',
    currencyParcel: '',
    saveCurrentStatistic: {},
  }
  onChangeTextYen=(newInput) => {
    const {statisticList, currencyYen} = this.props;
    const removeRealDot = removeDot(newInput);
    const findStatistic = find(statisticList, function (o) {
      const minimalPrice = result(o, 'minimalPrice', 0);
      const maximalPrice = result(o, 'maximalPrice', 0);
      // eslint-disable-next-line no-self-compare
      return minimalPrice <= parseInt(removeRealDot)*currencyYen && maximalPrice >= parseInt(removeRealDot)*currencyYen;
    });
    this.setState({currencyYen: removeRealDot});
    this.setState({saveCurrentStatistic: findStatistic});
  }
  onChangeTextParcel=(newInput) => {
    const removeRealDot = removeDot(newInput);
    this.setState({currencyParcel: removeRealDot});
  }

  goToEditCurrency = () => {
    this.props.navigation.navigate('EditCurrency');
  }
  goToViewStatistic = () => {
    this.props.navigation.navigate('DetailStatistic');
  }

  clearForm = () => {
    this.setState({currencyYen: '', currencyParcel: '', saveCurrentStatistic: {}});
  }

  render () {
    const {parcelPrice, currencyYen, statisticList} = this.props;
    // const initialNextPage = result(pokemonPagination, 'nextPage', '');
    return (
      <ScrollView contentContainerStyle={styles.bottomContainer} style={{flexGrow: 1, backgroundColor: '#E9E9E9'}}>

        <View style={styles.containerNavigation}>
          <TouchableOpacity onPress={this.goToViewStatistic} style={{paddingHorizontal: 25, paddingVertical: 10, borderRadius: 10, backgroundColor: 'black'}}><Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>Statistic data</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.goToEditCurrency} style={{paddingHorizontal: 25, paddingVertical: 10, borderRadius: 10, backgroundColor: 'black'}}><Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>Config</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.clearForm} style={{paddingHorizontal: 25, paddingVertical: 10, borderRadius: 10, backgroundColor: 'red'}}><Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>Clear Form</Text></TouchableOpacity>
        </View>

        {/* <View style={styles.containerSearch}>
          <View style={styles.containerSearchText}>
            <Text style={styles.searchText}>Search or Filter</Text>
          </View>
          <TextInput
            style={styles.textBoxSearch}
            onChangeText={this.onChangeText} placeholder='search poke by name'
          />
        </View> */}

        <View style={[styles.containerPokeTitle]}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Harga dalam yen({`\u00A5`})</Text>
        </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 10}}>
            <View style={{backgroundColor: '#FFFFFF', height: 49, width: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>{`\u00A5`}</Text>
            </View>
            <TextInput
              style={styles.textBoxSearch}
              onChangeText={this.onChangeTextYen}
              placeholder='example: 1000'
              value={formatNumber(this.state.currencyYen)}
              keyboardType={'number-pad'}
            />
          </View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>{`\u2022`} {`\u00A5`}1 = Rp {formatNumber(currencyYen)}</Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Berat dalam gram(dimulai dari 1 Gram)</Text>
        </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 10}}>
            <View style={{backgroundColor: '#FFFFFF', height: 49, width: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>Gr</Text>
            </View>
            <TextInput
              style={styles.textBoxSearch}
              onChangeText={this.onChangeTextParcel}
              placeholder='example: 1000'
              value={formatNumber(this.state.currencyParcel)}
              keyboardType={'number-pad'}
            />
        </View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>{`\u2022`} 1000gr = Rp {formatNumber(parcelPrice)}</Text>
        </View>
        <View style={{paddingLeft: 10}}>
        <View>
          <Text style={{fontSize: 17, fontWeight: '600'}}>Detail</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>Modal = Rp {formatNumber(parseInt(removeDot(result(this.state, 'currencyYen',0))*currencyYen))}</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600',}}>Ongkos Kirim = {formatNumber(parseInt(removeDot(result(this.state, 'currencyParcel',0))/1000*parcelPrice))}</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600', }}>Untung = Rp {formatNumber(parseInt((removeDot(result(this.state, 'currencyYen',0))*currencyYen) * result(this.state.saveCurrentStatistic, 'percentage', 0) / 100))}</Text>
          <Text style={{fontSize: 14, fontWeight: '600', }}>percent : {result(this.state.saveCurrentStatistic, 'percentage', 0)}</Text>
        </View>
        <View>
          <Text style={{fontSize: 23, fontWeight: '600', color: 'green'}}>Grand TOTAL = Rp {formatNumber((parseInt(removeDot(result(this.state, 'currencyYen',0))*currencyYen))+ parseInt((removeDot(result(this.state, 'currencyYen',0))*currencyYen) * result(this.state.saveCurrentStatistic, 'percentage', 0) / 100) + (parseInt(removeDot(result(this.state, 'currencyParcel',0))/1000*parcelPrice)))}</Text>
        </View>
        </View>
      </ScrollView>
    );
  }
}





export default HomeScreenComponent;
