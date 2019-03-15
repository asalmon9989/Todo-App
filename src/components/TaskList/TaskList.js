import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Task from '../common/Task';
import DateSection from '../common/DateSection';


const RightIcon = () => {
    return (
      <MaterialIcons name='perm-contact-calendar' color='blue' size={20}></MaterialIcons>
    );
  };

const separator = () => {
    return (
        <View style={{height: 20, flex: 1, backgroundColor: 'black'}}>

        </View>
    )
}
const sections = [
    {title: {day: "Today", date: "Fri. 3/13/19"} , data: [
        {"id": 1, "text": "Make an app already. I mean, you can't just keep reading tutorials about stuff. Otherwise, you'll have nothing to show for everything you know.", "priority": "Urgent", "project": "Coding"},
        {"id": 2, "text": "Do Things", "priority": "Normal", "project": "None"},
        {"id": 3, "text": "Test the app with less text.", "priority": "Normal", "project": "Coding"}]},
    {title: {day: "Tomorrow", date: "Sat. 3/13/19"} , data: [
        {"id": 4, "text": "Test the app with lots of lines os text.", "priority": "Normal", "project": "Coding"},
        {"id": 5, "text": "It's gonna have enough stuff so we can test scrolling.", "priority": "Normal", "project": "Coding"},
        {"id": 6, "text": "Need a few more", "priority": "Normal", "project": ""},
        {"id": 7, "text": "That should be good.", "priority": "Normal", "project": "Coding"}]},
    {title: {day: "Sunday", date: "Sun. 3/13/19"} , data: [
        {"id": 1, "text": "Make an app already. I mean, you can't just keep reading tutorials about stuff. Otherwise, you'll have nothing to show for everything you know.", "priority": "Urgent", "project": "Coding"},
        {"id": 2, "text": "Do Things", "priority": "Normal", "project": "None"},
        {"id": 3, "text": "Test the app with less text.", "priority": "Normal", "project": "Coding"}]},
];

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderItem = ({ item }) => {
        return (
          <Task task={item.text} project={item.project} onPress={() => console.log('task press')}/>
        )
    }

    _renderSectionHeader(item) { 
        return (
            <DateSection day={item.section.title.day} date={item.section.title.date} renderRightComponent={RightIcon} backgroundColor="#444"/>
        )
    }


    render() {
        return (
            <SectionList
                stickySectionHeadersEnabled
                renderItem={this._renderItem.bind(this)}
                renderSectionHeader={this._renderSectionHeader.bind(this)}
                sections={sections}
                keyExtractor={(item, i) => i.toString()}
                ref={ref => (this.sectionListRef = ref)}
            >

            </SectionList>
        )
    }
};

export default TaskList;