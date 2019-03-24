import React from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Input from '../common/Input';
import InputButton from '../common/InputButton';
import CircleButton from '../common/CircleButton';
import BottomRightFloat from '../common/BottomRightFloat';
import { MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { taskChanged, notesChanged, categoryChanged, dueDateChanged, category, alertChanged, priorityChanged } from '../../actions'
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
        AsyncStorage.getItem('taskList', (err, res) => {
            if (err) {
                console.log("error: ", err);
            } else {
                console.log("success?: ", JSON.parse(res));
                this.taskList = JSON.parse(res);
                if (res === null) {
                    AsyncStorage.setItem('taskList', "[]", (err) => {
                        if (err) {
                            console.log("Couldn't initialize tasks in AsyncStorage: ", err);
                        }
                    })
                }
            }
        });
    }
    componentDidMount() {
        this.__populateState();
    }
    __populateState() {
        this.props.categoryChanged("Redux");
        this.props.dueDateChanged("03-51-2019");
        this.props.priorityChanged("HiGh");
        this.props.alertChanged("Nope");
    }
    __clearStorage() {
        AsyncStorage.removeItem('taskList', (err) => {
            if (err) {
                console.log("Error removing taskList")
            }
        })
    }


    _onChangeTextTask(text) {
        this.props.taskChanged(text);
    }
    _onChangeTextNotes(text) {
        this.props.notesChanged(text);
    }
    _onCategoryPress(text) {
        this.props.categoryChanged(text);
    }
    _onDueDatePress(text) {
        this.props.dueDateChanged(text);
    }
    _onPriorityPress(text) {
        this.props.priorityChanged(text);
    }
    _onAlertPress(text) {
        this.props.alertChanged(text);
    }
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
        this.taskList.push(task);
        AsyncStorage.setItem('taskList', JSON.stringify(this.taskList), (err) => {
            if (err) {
                alert("Could not save task list");
            } else {
                alert("Task saved");
            } 
        })
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
                        onChangeText={this._onChangeTextTask.bind(this)}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialCommunityIcons name='pencil' size={26} color={COLORS.taskText}/>}
                        label="Notes"
                        value={this.props.notes}
                        placeholder="None"
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<Octicons name='file-submodule' size={26} color={COLORS.taskText}/>}
                        label="Category"
                        value={this.props.category}
                        editable={false}
                        onPress={this._onCategoryPress.bind(this)}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialCommunityIcons name='calendar' size={26} color={COLORS.taskText}/>}
                        label="Due Date"
                        value={this.props.dueDate}
                        editable={false}
                        onPress={this._onDueDatePress.bind(this)}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialIcons name='priority-high' size={26} color={COLORS.taskText}/>}
                        label="Priority"
                        value={this.props.priority}
                        editable={false}
                        onPress={this._onPriorityPress.bind(this)}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <InputButton 
                        icon={<MaterialCommunityIcons name='alert' size={26} color={COLORS.taskText}/>}
                        label="Alert"
                        value={this.props.alert}
                        editable={false}
                        onPress={this._onAlertPress.bind(this)}
                    />
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

});

const mapStateToProps = (state) => {
    const { task, notes, category, dueDate, priority, alert } = state.add;
    return {
        task, notes, category, dueDate, priority, alert
    }
};

export default connect(mapStateToProps, { taskChanged, notesChanged, categoryChanged, dueDateChanged, priorityChanged, alertChanged })(Add);
