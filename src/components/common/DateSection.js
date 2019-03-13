import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * 
 * @param {object} props 
 * @param {string} props.day
 * @param {string} props.date
 * @param {} props.rightIcon
 */
const DateSection = (props) => {

    return (
        <View style={styles.containerStyle}>
            <View style={styles.textContainerStyle}>
                <Text style={[styles.textStyle, styles.dayStyle]}>{props.day}  </Text>
                <Text style={[styles.textStyle, styles.dateStyle]}>  {props.date}</Text>
            </View>
            <View style={styles.iconContainer}>
                {props.renderRightComponent()}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',

        position: 'absolute',
        elevation: 4,
        backgroundColor: 'white',
        height: 40,
        overflow:'hidden',
        width: '100%'
    },
    textContainerStyle: {
        flexDirection: 'row',
        flex: 1
    },
    iconContainer: {
        alignSelf: 'flex-end'
    },
    textStyle: {
        

        color: 'orange'
    },
    dayStyle: {
        fontSize: 18
    },
    dateStyle: {
        color: 'gray',
        alignSelf: 'flex-end',
        fontSize: 12
    }
})

export default DateSection; 
