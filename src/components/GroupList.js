import React from 'react';
import Group from './Group';
import AddGroupContainer from '../containers/AddGroupContainer';

function GroupList({groups, currentGroup, setGroup}) {
	return(
		<div className="col-4">
			<h5 className="text-center">Группы</h5>
			<ul className="list-group mb-3">
				{groups.map(group => {
					return <Group group={group} currentGroup={currentGroup} setGroup={setGroup}/>;
				})}
			</ul>
			<AddGroupContainer />
		</div>
	);
}

export default GroupList;