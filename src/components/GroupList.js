import React from 'react';
import Group from './Group';
import AddGroup from './AddGroup';
import { connect } from 'react-redux';

function GroupList({groups}) {
	return(
		<div className="col-4">
			<h5 className="text-center">Группы</h5>
			<ul className="list-group mb-3">
				{groups.map(group => {
					return (<Group group={group} />)
				})}
			</ul>
			<AddGroup />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		groups: state.groups
	};
}

export default connect(mapStateToProps)(GroupList);