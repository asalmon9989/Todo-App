import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';

const InputButton = (props) => {
    return (
            <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress}  style={styles.container}>
                <View style={styles.iconContainer}>{props.icon}</View>
                <View style={styles.rightContainer}>
                    <Text style={styles.labelStyle}>{props.label}</Text>
                    <TextInput style={styles.valueStyle} editable={props.editable}>{props.value}</TextInput>
                </View>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    iconContainer: {
        flex: 1,
        paddingLeft: 20,
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 2,
        paddingHorizontal: 5,
    },
    labelStyle: {
        fontSize: 18,
    },
    valueStyle: {
        fontSize: 12,
    }
})

export default InputButton;