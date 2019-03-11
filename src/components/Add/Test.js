import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';

const Test = () => {
  return (
    <View style={styles.container}>
      <Text>Another screen!</Text>
      <Button title="go away" onPress={() => Actions.push("add")} />
      <Button title="go away" onPress={() => Actions.push("drawerMenu")} />
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

export default Test;
