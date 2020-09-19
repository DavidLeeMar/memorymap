
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Map from '../screens/Map';
import Form from '../screens/Form';
import Locations from '../screens/Locations';
import Information from '../screens/Information';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Map">
    <MainStack.Screen name="Map" component={Map} options={{headerShown: false }}/>
    <MainStack.Screen name="Form" component={Form} />
    <MainStack.Screen name="Locations" component={Locations} />
    <MainStack.Screen name="Information" component={Information} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);