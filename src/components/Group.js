import React from 'react';
import { connect } from 'react-redux';
import { setGroup } from '../actions/group';

function Group({group, selected, setGroup}) {
	let css = (selected === group.title) ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
	return(
		<li className={css} key={group.id} onClick={() => setGroup(group.title)}>{group.title}</li>
	);
}

function mapStateToProps(state) {
	return {
		selected: state.currentGroup
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setGroup: data => dispatch(setGroup(data))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);