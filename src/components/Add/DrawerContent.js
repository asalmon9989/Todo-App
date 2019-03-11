import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';

const DrawerContent = () => {
  console.log("Test");
  return (
    <View style={styles.container}>
      <Text>Another screen!</Text>
      <Button title="???" onPress={() => console.log("Good job")} />
      <Button title="???" onPress={() => console.log("Good job")} />
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

export default DrawerContent;
