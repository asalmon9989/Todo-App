import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import React from 'react';

import _ from 'lodash';
import { format, isToday, parse, isSameDay, isTomorrow, isAfter, differenceInCalendarDays } from 'date-fns';
import firebase from '@firebase/app';
import '@firebase/database';
import Task from '../common/Task';
import CircleButton from '../common/CircleButton';
import BottomRightFloat from '../common/BottomRightFloat';
import { MaterialIcons } from '@expo/vector-icons';
import { partitionTasksByDate, addTask, removeTask } from '../../util';
const t = require('../../test/tasks');
const {width, height} = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import DateSection from '../common/DateSection';
import TaskList from '../TaskList/TaskList';
import COLORS from '../../config/colors';

const sections = [
  {title: {day: "Today", date: "Fri. 3/13/19"} , data: [
      {"id": 1, "task": "Make an app already. I mean, you can't just keep reading tutorials about stuff. Otherwise, you'll have nothing to show for everything you know.", "priority": "Urgent", "category": "Coding"},
      {"id": 2, "task": "Do Things", "priority": "Normal", "category": "None"},
      {"id": 3, "task": "Test the app with less text.", "priority": "Normal", "category": "Coding"}]},
  {title: {day: "Tomorrow", date: "Sat. 3/13/19"} , data: [
      {"id": 4, "task": "Test the app with lots of lines os text.", "priority": "Normal", "category": "Coding"},
      {"id": 5, "task": "It's gonna have enough stuff so we can test scrolling.", "priority": "Normal", "category": "Coding"},
      {"id": 6, "task": "Need a few more", "priority": "Normal", "category": ""},
      {"id": 7, "task": "That should be good.", "priority": "Normal", "category": "Coding"}]},
  {title: {day: "Sunday", date: "Sun. 3/13/19"} , data: [
      {"id": 1, "task": "Make an app already. I mean, you can't just keep reading tutorials about stuff. Otherwise, you'll have nothing to show for everything you know.", "priority": "Urgent", "category": "Coding"},
      {"id": 2, "task": "Do Things", "priority": "Normal", "category": "None"},
      {"id": 3, "task": "Test the app with less text.", "priority": "Normal", "category": "Coding"}]},
];
 

//NEXT !!!!! When an item is added, don't redo all the grouping
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], sections: [] };
    this.populated = false;
  }

  componentDidMount() { 
    //this.setState({ tasks: t });
    const query = firebase.database().ref('/taskList');
    query.once('value', snapshot => {
      // let tasks = _.map(snapshot.val(), (value, uid) => { return { ...value, uid } });
      // tasks = this.sort(tasks, 'dueDate');
      // tasks = partitionTasksByDate(tasks);
      // this.setState({ sections: tasks });

      
      // this.populated = true;
      // console.log('value');
    });
    query.on('child_added', snapshot => {
      console.log(`child, ${this.populated}, ${JSON.stringify(snapshot.val())} ${snapshot.key}`);
      let task = { ...snapshot.val(), uid: snapshot.key };
      //console.log(task);
      //if (this.populated) {
        let newSections = addTask(task, this.state.sections);
        //console.log(newSections);
        this.setState({ sections: newSections }); 
      //}
    })
    query.on('child_removed', snapshot => {
      console.log(snapshot.val());
      let task = { ...snapshot.val(), uid: snapshot.key };
      let newSections = removeTask(task, this.state.sections);
      this.setState({ sections: newSections }); 
    }) 
  }
  sort(tasks, field) { 
    return _.sortBy(tasks, field); 
  }
  _onTaskRadioPress(task) {
    firebase.database().ref(`/taskList/${task.uid}`).remove((err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("removed?");
      }
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View >
          <TaskList 
            sections={this.state.sections}
            onItemPress={() => {}}
            onItemRadioPress={this._onTaskRadioPress.bind(this)} 
          />
        </View>

        <BottomRightFloat>
          <CircleButton backgroundColor={COLORS.floatBackground} radius={55} onLongPress={() => console.log("Circle Press")}  onPress={() => Actions.push("AddScreen") }>
            <MaterialIcons name='add' size={30} color={COLORS.floatIcon}/>
          </CircleButton>
        </BottomRightFloat>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


export default HomeScreen;
 