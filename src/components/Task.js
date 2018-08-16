import React from 'react';

function Task({task, handlerClick, handlerEdit, handlerDelete}) {
	let done = task.done ? "fa fa-check-circle" : "fa fa-circle-thin";
	let doneCss = task.done ? "btn btn-sm btn-outline-success mr-2" : "btn btn-sm btn-outline-secondary mr-2";
	return (
		<li key={task.id} className="list-group-item">
			<button className={doneCss} onClick={() => handlerClick(task.id)}>
				<i className={done} />
			</button>
			{task.title}
			<button className="btn btn-outline-danger btn-sm float-right mx-1" onClick={() => handlerDelete(task.id)}>
				<i className="fa fa-trash"/>
			</button>
			<button className="btn btn-outline-info btn-sm float-right mx-1" onClick={() => handlerEdit(task.id)}>
				<i className="fa fa-pencil"/>
			</button>
		</li>
	);
}

export default Task;