import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {View, Linking} from 'react-native';
import MainRoutes from './Routes/index.routes';
import {
  getPokemonFromApi,
  loadPokemonToBag,
} from './State/function/generalFunction';

const mapDispatchToProps = (dispatch) => ({
  funcgetPokemonFromApi: () => {
    dispatch(getPokemonFromApi())
  },
  funcloadPokemonToBag:()=>{
    dispatch(loadPokemonToBag())
  }
});

class AppComponent extends React.Component {
  static propTypes = {
    funcgetPokemonFromApi: PropTypes.func,
    funcloadPokemonToBag: PropTypes.func
  }

  componentDidMount(){
    this.props.funcloadPokemonToBag();
    this.props.funcgetPokemonFromApi();
  }

  render () {
    const {} = this.props;
    return (
      <View style={{flexGrow: 1}}>
          <MainRoutes />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(AppComponent);
