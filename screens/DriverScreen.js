import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const DriverScreen = () => {
  return (
    <View style = {styles.container}>
        <Text style={{color:'white'}}>Hello from DriverScreen</Text>
    </View>
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
