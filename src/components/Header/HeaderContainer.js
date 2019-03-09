import { Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderSection from './HeaderSection';

const STATUS_HEIGHT = StatusBar.currentHeight;
const ICON_SIZE = 24;

const Header = (props) => {

    return (
        <HeaderSection statusHeight={STATUS_HEIGHT}>
            {/* Menu button gets flex 2 so header text stays centered */}
            <TouchableOpacity onPress={props.onMenuPress} style={[styles.iconStyle, {flex: 2}]}>
                <MaterialIcons name='menu' size={props.iconSize} />
            </TouchableOpacity>
            <Text style={styles.textStyle}>{props.headerText}</Text>
            <TouchableOpacity onPress={props.onGPSPress} style={styles.iconStyle}>
                <MaterialIcons name='search' size={props.iconSize} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.dotsVertical} style={styles.iconStyle}>
                <MaterialCommunityIcons name='dots-vertical' size={props.iconSize} />
            </TouchableOpacity>
        </HeaderSection>
    )  
};

Header.propTypes = {
    headerText: PropTypes.string,
    textSize: PropTypes.number,
    iconSize: PropTypes.number,
    onMenuPress: PropTypes.func,
    onPlusPress: PropTypes.func,
    onOptionsPress: PropTypes.func
}

Header.defaultProps = {
    headerText: '',
    textSize: 24,
    iconSize: 24
}

const styles = StyleSheet.create({
    iconStyle: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        flex: 1
    },
    textStyle: {
        flex: 7,
        fontSize: ICON_SIZE,
        textAlign: 'center',
        alignSelf: 'center'
    }
});

export default Header;