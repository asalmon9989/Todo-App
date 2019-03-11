import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

import Task from '../common/Task';

const t = require('../../test/tasks');

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
      <Task task={item.text} project={item.project} radioColor='green'/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList renderItem={this._renderItem} keyExtractor={(item, i) => item.id.toString()} data={this.state.tasks}>

        </FlatList>
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
