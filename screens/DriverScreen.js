import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheet } from '../components/BottomSheet';

const DriverScreen = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <View style = {styles.container}></View>
      <BottomSheet/>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    backgroundColor: '#1d1d1d',
    alignItems: 'center'
  }
});

export default DriverScreen;
