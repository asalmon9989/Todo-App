import React from 'react';
import Header from '../Header/HeaderContainer';
import { Actions } from 'react-native-router-flux';
import COLORS from '../../config/colors';

const HomeNavBar = (props) =>  {
    return (
        <Header onMenuPress={Actions.drawerOpen} 
            headerText="To Do List" 
            backgroundColor={COLORS.headerBackground} 
            menuIconColor={COLORS.headerText}
            textStyle={{ color: COLORS.headerText }}
            searchIconColor={COLORS.headerText}
            dotsIconColor={COLORS.headerText} 
            borderColor="rgba(0,0,0,0.3)"
        />
    );
};

export default HomeNavBar;
