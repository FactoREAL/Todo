import * as React from 'react';
import { connect } from 'react-redux';
import { addTask, incTaskId } from '../actions/task';
import AddTask from '../components/AddTask';
import {IAddTaskProps, IRootState} from "../types";
import {Dispatch} from "redux";

function AddTaskContainer(props: IAddTaskProps) {
	return <AddTask {...props} />;
}

function mapStateToProps(state: IRootState) {
	return {
		currentGroup: state.currentGroup,
		nextTaskId: state.nextTaskId
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		addTask: (data: any) => dispatch(addTask(data)),
		incTaskId: () => dispatch(incTaskId())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);