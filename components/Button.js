import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Button = () => {
  const navigation = useNavigation(); 
  const [isPress1, setIsPress1] = React.useState(false);
  const [isPress2, setIsPress2] = React.useState(false);
  
  const touchPropsStudent = {
    activeOpacity: 1,
    underlayColor: 'none',
    style: isPress1 ? styles.btnStudentPress : styles.btnStudentNormal,
    onHideUnderlay: () => setIsPress1(false),
    onShowUnderlay: () => setIsPress1(true),
    onPress: () => navigation.navigate('StudentScreen'),
  };
  const touchPropsDriver = {
    activeOpacity: 1,
    underlayColor: 'none',
    style: isPress2 ? styles.btnDriverPress : styles.btnDriverNormal,
    onHideUnderlay: () => setIsPress2(false),
    onShowUnderlay: () => setIsPress2(true),
    onPress: () => navigation.navigate('DriverScreen'),
  };
  return (
    <View style={{position:'absolute', bottom: 40}}>
      <TouchableHighlight {...touchPropsStudent}>
        <Text style={styles.btntextStudent}>Student</Text> 
      </TouchableHighlight>
      
      <TouchableHighlight {...touchPropsDriver}>
        <Text style={styles.btntextDriver}>Driver</Text> 
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  btnStudentNormal: {
    marginTop: 20,
    backgroundColor: '#54d1ff',
    borderRadius: 15,
    borderBottomWidth: 5,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#13BFFE',
    alignItems: 'center',
    width: 320,
  },
  btnStudentPress: {
    marginTop: 23,
    backgroundColor: '#54d1ff',
    borderRadius: 15,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#13BFFE',
    alignItems: 'center',
    width: 320,
  },
  btntextStudent: {
    color: "#1d1d1d",
    fontSize: 20,
    padding: 10,
    fontFamily: 'Kanit-Regular'
  },
  btnDriverNormal: {
    marginTop: 20,
    backgroundColor: '#1d1d1d',
    borderRadius: 15,
    borderBottomWidth: 5,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#565656',
    alignItems: 'center',
    width: 320,
  },
  btnDriverPress: {
    marginTop: 23,
    backgroundColor: '#1d1d1d',
    borderRadius: 15,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#565656',
    alignItems: 'center',
    width: 320,
  },
  btntextDriver: {
    color: "#13bffe",
    fontSize: 20,
    padding: 10,
    fontFamily: 'Kanit-Regular'
  }
});

export default Button;