import * as React from "react";
import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { IRootState, ITaskListProps } from "../data/models";
import { bindActionCreators, Dispatch } from "redux";
import {deleteTask, editCancel, editSave, editTask, toggleTask} from "../data/actions";

function TaskListContainer(props: ITaskListProps) {
  return <TaskList {...props} />;
}

function mapStateToProps(state: IRootState) {
  return {
    currentGroup: state.currentGroup,
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    deleteTask: bindActionCreators(deleteTask, dispatch),
    editCancel: bindActionCreators(editCancel, dispatch),
    editSave: bindActionCreators(editSave, dispatch),
    editTask: bindActionCreators(editTask, dispatch),
    toggleTask: bindActionCreators(toggleTask, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
