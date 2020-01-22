import * as React from "react";
import { connect } from "react-redux";

import AddTask from "../components/AddTask";
import { IRootState } from "../data/models";
import { addTask, incTaskId } from "../data/actions";

type Props = InjectStateProps & InjectDispatchProps;

const AddTaskContainer: React.FC<Props> = props => <AddTask {...props} />;

const mapStateToProps = (state: IRootState) => ({
  currentGroup: state.currentGroup,
  nextTaskId: state.nextTaskId
});

const mapDispatchToProps = {
  addTask,
  incTaskId
};
type InjectStateProps = ReturnType<typeof mapStateToProps>;
type InjectDispatchProps = typeof mapDispatchToProps;

export default connect<InjectStateProps, InjectDispatchProps, object>(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskContainer);
