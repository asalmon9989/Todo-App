import React from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import Input from '../common/Input';
import InputButton from '../common/InputButton';
import CircleButton from '../common/CircleButton';
import BottomRightFloat from '../common/BottomRightFloat';
import { MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import COLORS from '../../config/colors';

const {width, height} = Dimensions.get('window');

/**
 * @param props
 * - onChangeTask
 * - onChangeNotes
 * - onPressCategory
 * - onPressDueDate
 * - onPressPriority
 * - onPressAlert
 * - onPressCheck
 */
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: "", notes: ""};
    }

    _onChangeTextTask(text) {
        this.setState({ task: text });
    }
    _onChangeTextNotes(text) {
        this.setState({ notes: text });
    }
    

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.inputStyle}>
                    <Input
                        placeholder="New Task"
                        value={this.state.task}
                        label="Task: "
                        onChangeText={this._onChangeTextTask.bind(this)}
                    />
                </View>
                {/* <View style={styles.inputStyle}>
                    <Input
                        placeholder="Notes"
                        value={this.state.notes}
                        label="Notes: "
                        onChangeText={this._onChangeTextNotes.bind(this)}
                        multiline={true}
                    />
                </View> */}
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialCommunityIcons name='pencil' size={26} color={COLORS.taskText}/>}
                        label="Notes"
                        value="03-29-2019"
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<Octicons name='file-submodule' size={26} color={COLORS.taskText}/>}
                        label="Category"
                        value="Coding"
                        editable={false}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialCommunityIcons name='calendar' size={26} color={COLORS.taskText}/>}
                        label="Due Date"
                        value="03-29-2019"
                        editable={false}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialIcons name='priority-high' size={26} color={COLORS.taskText}/>}
                        label="Priority"
                        value="HIGH"
                        editable={false}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialCommunityIcons name='alert' size={26} color={COLORS.taskText}/>}
                        label="Alert"
                        value="03-29-2019"
                        editable={false}
                    />
                </View>

                <BottomRightFloat>
                    <CircleButton backgroundColor={COLORS.floatBackground} radius={55}>
                        <MaterialIcons name='check' size={30} color={COLORS.floatIcon}/>
                    </CircleButton>
                </BottomRightFloat>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingVertical: 10
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        width: '100%',
    },

})

export default Add;
