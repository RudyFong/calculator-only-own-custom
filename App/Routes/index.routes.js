// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../Pages/CalculatorHome.page';
import EditCurencyPage from '../Pages/EditCurrency.page';
import EditStatisticPage from '../Pages/EditStatisctic.page';
import ViewStatisticPage from '../Pages/ViewStatistic.page';

const Stack = createNativeStackNavigator();

function  MainRoutes () {
  return (
    <NavigationContainer>
      <Stack.Navigator     
        initialRouteName='Home'
        >
        <Stack.Screen
          name='Home'
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='EditCurrency'
          component={EditCurencyPage}
          options={{ title: 'Edit Currency' }}
        />
        <Stack.Screen
          name='DetailStatistic'
          component={ViewStatisticPage}
          options={{ title: 'Statistic Data' }}
        />
        <Stack.Screen
          name='EditDetailStatistic'
          component={EditStatisticPage}
          options={{ title: 'Edit Statistic Data' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;