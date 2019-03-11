import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AddScreen = () => {
  console.log("Add");
  return (
    <View style={styles.container}>
      <Text>Add a new task</Text>
    </View>
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
