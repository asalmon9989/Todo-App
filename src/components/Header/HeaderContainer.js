import { Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderSection from './HeaderSection';

const STATUS_HEIGHT = StatusBar.currentHeight;
const ICON_SIZE = 24;

/**
 * 
 * @param { headerText, textSize, iconSize, onMenuPress, onSearchPress, onOptionsPress, backgroundColor, borderColor, menuIconColor, searchIconColor, dotsIconColor, textStyle} props 
 */
const Header = (props) => {

    return (
        <HeaderSection statusHeight={STATUS_HEIGHT} style={{ backgroundColor: props.backgroundColor, borderColor: props.borderColor }}>
            <TouchableOpacity onPress={props.onMenuPress} style={[styles.iconStyle, {flex: 2}]}>
                <MaterialIcons name='menu' size={props.iconSize} color={props.menuIconColor} />
            </TouchableOpacity>
            <Text style={[styles.textStyle, props.textStyle]} >{props.headerText}</Text>
            <TouchableOpacity onPress={props.onSearchPress} style={styles.iconStyle}>
                <MaterialIcons name='search' size={props.iconSize} color={props.searchIconColor}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onOptionsPress} style={styles.iconStyle}>
                <MaterialCommunityIcons name='dots-vertical' size={props.iconSize} color={props.dotsIconColor}/>
            </TouchableOpacity>
        </HeaderSection>
    )  
};

Header.propTypes = {
    headerText: PropTypes.string,
    textSize: PropTypes.number,
    iconSize: PropTypes.number,
    onMenuPress: PropTypes.func,
    onSearchPress: PropTypes.func,
    onOptionsPress: PropTypes.func,
    backgroundColor: PropTypes.string, 
    borderColor: PropTypes.string, 
    menuIconColor: PropTypes.string, 
    searchIconColor: PropTypes.string, 
    dotsIconColor: PropTypes.string, 
    textStyle: PropTypes.object
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
        alignSelf: 'center'
    }
});

export default Header;