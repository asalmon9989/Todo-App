import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderContainer from './components/Header/HeaderContainer';

class Root extends React.Component {
    render() {
        return (
            <View>
                <HeaderContainer headerText="To-Do List"/>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Root;
