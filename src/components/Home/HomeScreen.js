import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Task from '../common/Task';

const AddScreen = () => {
  return (
    <View style={styles.container}>
      <Task task="Make an app already. I mean, you can't just keep reading tutorials about stuff. Otherwise, you'll have nothing to show for everything you know."
        onPress={() => console.log('press')}
        onLongPress={() => console.log("long boi press")}
        onRadioPress={() => console.log('radio press')}
      >
      </Task>
      <Task task="Test the app with less text."></Task>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


export default AddScreen;
