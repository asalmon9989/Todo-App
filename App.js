import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Root from './src/index'


class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(() => {})}>
        <Root />
      </Provider>
    );
  }
}

export default App;
