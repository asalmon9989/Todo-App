import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Add from './Add';

const AddScreen = () => {
  return (
    <Add />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default AddScreen;
