import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

const SelectRoles = () => {
  return (
    <View style = {styles.container} >
      <View style={{top:75, alignItems: 'center'}}>
        <Image
            source={require('../assets/ref.png')}
            style={{width:150, height:154}}
        />
        <Text style={styles.LogoText}>BusTracking</Text>
      </View>
      <Button/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    backgroundColor: '#1d1d1d',
    alignItems: 'center'
  },
  LogoText: {
    fontSize: 35, 
    color: '#13bffe',
    marginTop: 20,
    fontFamily:'Kanit-Medium',
  }
});

export default SelectRoles;
