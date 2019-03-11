import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderContainer from './components/Header/HeaderContainer';
import Routes from './Routes';

class Root extends React.Component {
    render() {
        return (
            <Routes />
            // <View>
            //     <HeaderContainer headerText="To-Do List"/>
            //     <Routes />
            // </View>
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
