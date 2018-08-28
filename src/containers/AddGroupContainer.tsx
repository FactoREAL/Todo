import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import AddGroup from '../components/AddGroup';
import { addGroup, incGroupId } from '../actions/group';
import { IAddGroupProps, IRootState } from "../types";

function AddGroupContainer({nextGroupId, onAddGroup, onIncGroupId}: IAddGroupProps) {
	return <AddGroup 
		nextGroupId={nextGroupId} 
		onAddGroup={onAddGroup}
		onIncGroupId={onIncGroupId}
	/>;
}

function mapStateToProps(state: IRootState) {
	return {
		nextGroupId: state.nextGroupId
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onAddGroup: (data: any) => dispatch(addGroup(data)),
		onIncGroupId: () => dispatch(incGroupId())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupContainer);