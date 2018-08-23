import React from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/GroupList';
import { setGroup } from '../actions/group';

function GroupListContainer({groups, currentGroup, setGroup}) {
	return <GroupList 
		groups={groups} 
		currentGroup={currentGroup} 
		setGroup={setGroup}
	/>
}

function mapStateToProps(state) {
	return {
		groups: state.groups,
		currentGroup: state.currentGroup
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setGroup: data => dispatch(setGroup(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupListContainer);