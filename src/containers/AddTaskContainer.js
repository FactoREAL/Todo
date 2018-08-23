import React from 'react';
import { connect } from 'react-redux';
import { addTask, incTaskId } from '../actions/task';
import AddTask from '../components/AddTask';

function AddTaskContainer(props) {
	return <AddTask 
		currentGroup={props.currentGroup} 
		nextTaskId={props.nextTaskId} 
		addTask={props.addTask} 
		incTaskId={props.incTaskId} 
	/>;
}

function mapStateToProps(state) {
	return {
		currentGroup: state.currentGroup,
		nextTaskId: state.nextTaskId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addTask: data => dispatch(addTask(data)),
		incTaskId: () => dispatch(incTaskId())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);