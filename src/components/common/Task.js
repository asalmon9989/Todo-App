import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import RadioButton from './RadioButton';

/**
 * 
 * @param {task, project, priority, onPress, onLongPress, onRadioPress } props 
 *  - 
 */
const Task = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress}>
      <View style={styles.container}>
        
        <View style={styles.taskContainer}>
          <RadioButton style={styles.radioStyle} onPress={props.onRadioPress}></RadioButton>
          <Text style={styles.taskTextStyle}>{props.task}</Text>
        </View>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTextStyle}>Project</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 65,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  taskContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center'
  },
  radioStyle: {
    flex: 1,
    alignSelf: 'center'
  },
  taskTextStyle: {
    flex: 4,
    alignSelf: 'center',
    fontSize: 16
  },
  projectContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  projectTextStyle: {
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'sans-serif-thin'
  }
});

export default Task;