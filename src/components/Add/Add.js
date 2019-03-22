import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
import Input from '../common/Input';
import InputButton from '../common/InputButton';
import CircleButton from '../common/CircleButton';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../../config/colors';

const {width, height} = Dimensions.get('window');

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: ""};
    }

    _onChangeText(text) {
        this.setState({ task: text });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.inputStyle}>
                    <Input
                        placeholder="New Task"
                        value={this.state.task}
                        label="Task: "
                        onChangeText={this._onChangeText.bind(this)}
                    />
                </View>

                <View style={styles.inputStyle}>
                    <InputButton />
                </View>


                <View style={styles.checkBoxContainer}>
                    <CircleButton backgroundColor={COLORS.floatBackground} radius={55}>
                        <MaterialIcons name='check' size={30} color={COLORS.floatIcon}/>
                    </CircleButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        width: '100%',
    },

    checkBoxContainer: { 
        position: 'absolute', 
        top: height*.7, 
        right: width*.1 
    }
})

export default Add;
