import React from 'react';
import Group from './Group';
import AddGroup from './AddGroup';

function GroupList({groups, currentGroup, handlerSubmit, handlerGroupClick}) {
	return(
		<div className="col-4">
			<h5 className="text-center">Группы</h5>
			<ul className="list-group mb-3">
				{groups.map(group => {
					return (<Group group={group} selected={currentGroup} handlerClick={handlerGroupClick}/>)
				})}
			</ul>
			<AddGroup handlerSubmit={handlerSubmit} />
		</div>
	);
}

export default GroupList;