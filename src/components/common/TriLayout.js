import React from 'react';
import { View, StyleSheet } from 'react-native';

const TriLayout = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {props.children[0]}
            </View>
            <View style={styles.rightContainer}>
                <View>
                    {props.children[1]}
                </View>
                <View>
                    {props.children[2]}
                </View>
            </View>
        </View>
    )
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
})

export default TriLayout;