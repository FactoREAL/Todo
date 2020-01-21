import * as React from "react";
import { connect } from "react-redux";
import AddTask from "../components/AddTask";
import { IAddTaskProps, IRootState } from "../data/models";
import { bindActionCreators, Dispatch } from "redux";
import {addTask, incTaskId} from "../data/actions";

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
    addTask: bindActionCreators(addTask, dispatch),
    incTaskId: bindActionCreators(incTaskId, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer);
