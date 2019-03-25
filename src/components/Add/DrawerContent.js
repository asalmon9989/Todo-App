import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <Text>Another screen!</Text>
      <Button title="Add" onPress={() => Actions.AddScreen()} />
      <Button title="Home" onPress={() => Actions.push("HomeScreen")} />
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
