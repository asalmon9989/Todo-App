import { View, StyleSheet } from 'react-native';
import React from 'react';

const HeaderSection = ({ children, statusHeight, style }) => {
    return (
        <View style={[styles.headerStyle, { marginTop: statusHeight }, style]}>
            {children}
        </View>
    );  
};


const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'rgba(0,0,0,0.3)',
        backgroundColor: 'white'
    }
});

export default HeaderSection; 