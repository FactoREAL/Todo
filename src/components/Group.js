import React from 'react';

function Group({group, selected, handlerClick}) {
	let css = (selected === group.title) ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action";
	return(
		<li className={css} key={group.id} onClick={() => handlerClick(group.id)}>{group.title}</li>
	);
}

export default Group;