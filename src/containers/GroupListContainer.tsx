import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import GroupList from "../components/GroupList";
import { setGroup } from "../actions/group";
import { IRootState, IGroupListProps } from "../types";

function GroupListContainer(props: IGroupListProps) {
  return <GroupList {...props} />;
}

function mapStateToProps(state: IRootState) {
  return {
    currentGroup: state.currentGroup,
    groups: state.groups
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onSetGroup: bindActionCreators(setGroup, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupListContainer);
