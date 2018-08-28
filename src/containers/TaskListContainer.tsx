import * as React from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import { toggleTask, editTask, deleteTask, editSave, editCancel } from '../actions/task';
import {IRootState, ITaskListProps} from "../types";
import {Dispatch} from "redux";

function TaskListContainer(props: ITaskListProps) {
	return <TaskList {...props}	/>;
}

function mapStateToProps(state: IRootState) {
	return {
        currentGroup: state.currentGroup,
		tasks: state.tasks
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        deleteTask: (data: number) => dispatch(deleteTask(data)),
        editCancel: (data: number) => dispatch(editCancel(data)),
        editSave: (data: any) => dispatch(editSave(data)),
        editTask: (data: number) => dispatch(editTask(data)),
        toggleTask: (data: number) => dispatch(toggleTask(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);