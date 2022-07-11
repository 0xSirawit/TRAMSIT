import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SelectRoles from './screens/SelectRoles';
import DriverScreen from './screens/DriverScreen';
import StudentScreen from './screens/StudentScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={'#1d1d1d'}/>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="SelectRoles"
          component={SelectRoles}
          options={{ title: 'SelectRoles' }}
        />
        <Stack.Screen
          name="DriverScreen"
          component={DriverScreen}
          options={{ title: 'DriverScreen' }}
        />
         <Stack.Screen
          name="StudentScreen"
          component={StudentScreen}
          options={{ title: 'StudentScreen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default App;