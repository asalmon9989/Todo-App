import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import React from 'react';

import _ from 'lodash';
import firebase from '@firebase/app';
import '@firebase/database';
import Task from '../common/Task';
import CircleButton from '../common/CircleButton';
import BottomRightFloat from '../common/BottomRightFloat';
import { MaterialIcons } from '@expo/vector-icons';
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
 
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], sections: [] };

  }

  componentDidMount() { 
    //this.setState({ tasks: t });
    firebase.database().ref('/taskList')
      .on('value', snapshot => {
        const tasks = _.map(snapshot.val(), (value, uid) => { return { ...value, uid } });
        this.setState({ tasks });
        this.groupTasks();
      })
  }
  groupTasks() {
    this.setState({sections: [
      {title: {day: "Today", date: "Mon. 3-25-2019"}, data: this.state.tasks }
    ]});
    console.log(JSON.stringify(this.state.tasks));
  }

  



  render() {
    return (
      <View style={styles.container}>
        <View >
          <TaskList 
            sections={this.state.sections}
            onItemPress={() => console.log('task press')}  
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
 