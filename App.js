import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import Root from './src/index'


class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Root />
      </Provider>
    );
  }
}

export default App;
