import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';


const StudentScreen = () => {
  return (
    <View style = {styles.container}>
      <MapView
      initialRegion={{
        latitude: 7.009215565233926,
        longitude: 100.49727338129509,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }} 
      style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    backgroundColor: '#1d1d1d',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default StudentScreen;
