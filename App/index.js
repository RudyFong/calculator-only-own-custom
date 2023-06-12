import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './State/reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContainer from './AppContainer';

const Stack = createNativeStackNavigator();


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
};


export default App;