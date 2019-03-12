import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import React from 'react';

import Task from '../common/Task';
import CircleButton from '../common/CircleButton';
import { MaterialIcons } from '@expo/vector-icons';
const t = require('../../test/tasks');
const {width, height} = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentDidMount() { 
    this.setState({ tasks: t });

  }

  _renderItem = ({ item }) => {
    return (
      <Task task={item.text} project={item.project} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList renderItem={this._renderItem} keyExtractor={(item, i) => item.id.toString()} data={this.state.tasks}>

        </FlatList>
        <View style={{ position: 'absolute', top: height*.7, right: width*.1 }}>
          <CircleButton backgroundColor='rgb(79, 135, 245)' radius={55} onLongPress={() => console.log("Circle Press")}  onPress={() => Actions.push("AddScreen") }>
            <MaterialIcons name='add' size={30} color={'white'}/>
          </CircleButton>
        </View>
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
