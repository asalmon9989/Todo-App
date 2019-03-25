import React from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, Dimensions, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import firebase from '@firebase/app';
import '@firebase/database';

import Input from '../common/Input';
import TriLayout from '../common/TriLayout';
import InputButton from '../common/InputButton';
import CircleButton from '../common/CircleButton';
import BottomRightFloat from '../common/BottomRightFloat';
import { MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { taskChanged, notesChanged, categoryChanged, dueDateChanged, alertChanged, priorityChanged, clearAddForm } from '../../actions';
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
        this.taskList = [];
    }
    componentDidMount() {
        //this.__populateState();
        console.log("Mount");
    }
    componentWillUnmount() {
        this.props.clearAddForm();
        console.log("Unmount");
    }
    __populateState() {
        this.props.categoryChanged("Redux");
        this.props.dueDateChanged("03-30-2019");
        this.props.priorityChanged("HiGh");
        this.props.alertChanged("Nope");
    }


    // _onChangeTextTask(text) {
    //     this.props.taskChanged(text);
    // }
    // _onChangeTextNotes(text) {
    //     this.props.notesChanged(text);
    // }
    // _onCategoryPress(text) {
    //     //this.props.categoryChanged(text);
    // }
    // _onDueDatePress(text) {
    //     //this.props.dueDateChanged(text);
    // }
    // _onPriorityPress(text) {
    //     //this.props.priorityChanged(text);
    // }
    // _onAlertPress(text) {
    //     //this.props.alertChanged(text);
    // }
    _onCheckPress() {
        if (this.props.task === "") {
            alert("Enter a task");
            return;
        }
        const task = this.parseTask();
        this.saveTask(task);
        Actions.popTo('HomeScreen');
    }
    saveTask(task) {
        firebase.database().ref(`/taskList`)
            .push(task)
            .then(() => console.log("Task saved to firebase."));
    }
    parseTask() {
        const { task, notes, category, dueDate, priority, alert } = this.props;
        return {
            task, notes, category, dueDate, priority, alert
        };
    }



    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.inputStyle}>
                    <Input
                        placeholder="New Task"
                        value={this.props.task}
                        label="Task: "
                        onChangeText={(text) => this.props.taskChanged(text)}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <TriLayout>
                        <MaterialCommunityIcons name='pencil' size={26} color={COLORS.taskText}/>
                        <Text style={[styles.labelStyle, COLORS.taskText]}>Notes</Text>
                        <TextInput placeholder="Additional notes..." onChangeText={(text) => this.props.notesChanged(text)}>{this.props.notes}</TextInput>
                    </TriLayout>
                </View>



                <View style={styles.inputStyle}>
                    <TriLayout>
                        <Octicons name='file-submodule' size={26} color={COLORS.taskText}/>
                        <Text style={[styles.labelStyle, COLORS.taskText]}>Category</Text>
                        <View style={{marginLeft: -8}}>
                            <Picker
                                selectedValue={this.props.category}
                                onValueChange={(value, i) => this.props.categoryChanged(value)}
                                style={{width: 150}}
                            >    
                                <Picker.Item label="Coding" value="Coding" />
                                <Picker.Item label="Work" value="Work" />
                                <Picker.Item label="Exercise" value="Exercise" />
                            </Picker>
                        </View>
                    </TriLayout>
                </View>

                <View style={styles.inputStyle}>
                    <TriLayout>
                        <MaterialCommunityIcons name='calendar' size={26} color={COLORS.taskText}/>
                        <Text style={[styles.labelStyle, COLORS.taskText]}>Due Date</Text>
                        <View style={{marginLeft: -8}}>
                            <Picker
                                selectedValue={this.props.dueDate}
                                onValueChange={(value, i) => this.props.dueDateChanged(value)}
                                style={{width: 150}}
                            >    
                                <Picker.Item label="I'm brok" value="Hey fix this" />
                            </Picker>
                        </View>
                    </TriLayout>
                </View>

                <View style={styles.inputStyle}>
                    <TriLayout>
                        <MaterialIcons name='priority-high' size={26} color={COLORS.taskText}/>
                        <Text style={[styles.labelStyle, COLORS.taskText]}>Priority</Text>
                        <View style={{marginLeft: -8}}>
                            <Picker
                                selectedValue={this.props.priority}
                                onValueChange={(value, i) => this.props.priorityChanged(value)}
                                style={{width: 150}}
                            >    
                                <Picker.Item label="High" value="High" />
                                <Picker.Item label="Normal" value="Normal" />
                                <Picker.Item label="Low" value="Low" />
                            </Picker>
                        </View>
                    </TriLayout>
                </View>


                <View style={styles.inputStyle}>
                    <TriLayout>
                        <MaterialCommunityIcons name='alert' size={26} color={COLORS.taskText}/>
                        <Text style={[styles.labelStyle, COLORS.taskText]}>Alert</Text>
                        <View style={{marginLeft: -8}}>
                            <Picker
                                selectedValue={this.props.alert}
                                onValueChange={(value, i) => this.props.alertChanged(value)}
                                style={{width: 150}}
                            >    
                                <Picker.Item label="None" value="None" />
                                <Picker.Item label="Everyday" value="Everyday" />
                            </Picker>
                        </View>
                    </TriLayout>
                </View>

                <BottomRightFloat>
                    <CircleButton backgroundColor={COLORS.floatBackground} radius={55}>
                        <MaterialIcons name='check' size={30} color={COLORS.floatIcon} onPress={this._onCheckPress.bind(this)}/>
                    </CircleButton>
                </BottomRightFloat>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: COLORS.taskBackground,
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        width: '100%',
    },
    labelStyle: {
        fontSize: 18,
    },
});

const mapStateToProps = (state) => {
    const { task, notes, category, dueDate, priority, alert } = state.add;
    return {
        task, notes, category, dueDate, priority, alert
    }
};

export default connect(mapStateToProps, { taskChanged, notesChanged, categoryChanged, dueDateChanged, priorityChanged, alertChanged, clearAddForm })(Add);
