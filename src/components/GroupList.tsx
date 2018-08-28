import * as React from 'react';
import Group from './Group';
import AddGroupContainer from '../containers/AddGroupContainer';
import { IGroupListProps } from "../types";

function GroupList({groups, currentGroup, onSetGroup}: IGroupListProps) {
	return(
		<div className="col-4">
			<h5 className="text-center">Группы</h5>
			<ul className="list-group mb-3">
				{groups.map(group => {
					return <Group key={group.id} group={group} currentGroup={currentGroup} setGroup={onSetGroup}/>;
				})}
			</ul>
			<AddGroupContainer />
		</div>
	);
}

export default GroupList;