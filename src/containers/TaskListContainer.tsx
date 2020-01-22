import * as React from "react";
import { connect } from "react-redux";

import TaskList from "../components/TaskList";
import { IRootState } from "../data/models";
import {
  deleteTask,
  editCancel,
  editSave,
  editTask,
  toggleTask
} from "../data/actions";

type Props = InjectStateProps & InjectDispatchProps;

const TaskListContainer: React.FC<Props> = (props) => <TaskList {...props} />;

const mapStateToProps = (state: IRootState) => ({
  currentGroup: state.currentGroup,
  tasks: state.tasks
});

const mapDispatchToProps = {
  deleteTask,
  editCancel,
  editSave,
  editTask,
  toggleTask
};
type InjectStateProps = ReturnType<typeof mapStateToProps>;
type InjectDispatchProps = typeof mapDispatchToProps;

export default connect<InjectStateProps, InjectDispatchProps, object>(
  mapStateToProps,
  mapDispatchToProps
)(TaskListContainer);
