import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import { toggleTask, editTask, deleteTask, editSave, editCancel } from '../actions/task';

function TaskListContainer(props) {
	return <TaskList 
		tasks={props.tasks} 
		currentGroup={props.currentGroup} 
		toggleTask={props.toggleTask} 
		editTask={props.editTask} 
		deleteTask={props.deleteTask} 
		editSave={props.editSave} 
		editCancel={props.editCancel}
	/>;
}

function mapStateToProps(state) {
	return {
		tasks: state.tasks,
		currentGroup: state.currentGroup
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleTask: data => dispatch(toggleTask(data)),
		deleteTask: data => dispatch(deleteTask(data)),
		editTask: data => dispatch(editTask(data)),
		editSave: data => dispatch(editSave(data)),
		editCancel: data => dispatch(editCancel(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);