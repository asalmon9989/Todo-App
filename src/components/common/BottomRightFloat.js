import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: height*.7, 
    right: width*.1 
  },
});

export default BottomRightFloat = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};