import React from 'react';
import Header from '../Header/HeaderContainer';
import { Actions } from 'react-native-router-flux';

const HomeNavBar = (props) =>  {
    return (
        <Header onMenuPress={Actions.drawerOpen} 
            headerText="To Do List" 
            backgroundColor='rgb(85, 149, 252)' 
            menuIconColor='white'
            textStyle={{ color: 'white' }}
            searchIconColor="white"
            dotsIconColor="white"  
            borderColor="gray"
        />
    );
};

export default HomeNavBar;
