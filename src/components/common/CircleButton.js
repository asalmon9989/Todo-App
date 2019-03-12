import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';


const CircleButton = (props) => {
    const propStyles = getPropStyles(props);
    return (
        <TouchableWithoutFeedback onPress={props.onPress} onLongPress={props.onLongPress}>
            <View style={[styles.containerStyle, propStyles.container]}>
                {props.children || <Text style={[styles.textStyle, propStyles.text]}>{props.symbol}</Text>}
            </View>
        </TouchableWithoutFeedback>
    );
};

CircleButton.propTypes = {
    symbol: PropTypes.string,
    radius: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    color: PropTypes.string
};
CircleButton.defaultProps = {
    symbol: "",
    color: 'white',
    backgroundColor: 'orange',
    onPress: () => {},
    onLongPress: () => {}
};

const getPropStyles = (options) => {
    let fontSize;
    if (options.symbol.length > 1) {
        fontSize = options.radius/options.symbol.length;
    } else {
        fontSize = options.radius * 0.7;
    }
    return {
        container: {
            borderWidth: 5, 
            borderRadius: options.radius, 
            height: options.radius, 
            width: options.radius,
            backgroundColor: options.backgroundColor,
            borderColor: options.backgroundColor,
            elevation: 5
        },
        text: {
            backgroundColor: options.backgroundColor,
            borderRadius: options.radius,
            fontSize: fontSize,
            color: options.color
        }
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white'
    }
});

export default CircleButton;
