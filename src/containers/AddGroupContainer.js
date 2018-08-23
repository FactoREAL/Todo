import React from 'react';
import { connect } from 'react-redux';
import AddGroup from '../components/AddGroup';
import { addGroup, incGroupId } from '../actions/group';

function AddGroupContainer({nextGroupId, addGroup, incGroupId}) {
	return <AddGroup 
		nextGroupId={nextGroupId} 
		addGroup={addGroup} 
		incGroupId={incGroupId} 
	/>;
}

function mapStateToProps(state) {
	return {
		nextGroupId: state.nextGroupId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addGroup: data => dispatch(addGroup(data)),
		incGroupId: () => dispatch(incGroupId())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupContainer);