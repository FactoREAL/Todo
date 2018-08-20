import React from 'react';
import AddTask from './AddTask';
import Task from './Task';
import EditTask from './EditTask';
import { connect } from 'react-redux';

function TaskList({tasks, currentGroup}) {
	let form = (currentGroup) ? <AddTask /> : null;
	let currentTasks = tasks.filter(task => task.group === currentGroup);
	return(
		<div className="col-8">
			<h5 className="text-center">Задачи</h5>
			<ul className="list-group list-group-flush mb-3">
				{currentTasks.map(task => {
					if (task.edit) return <EditTask task={task} />
					return <Task task={task} />;
				})}
			</ul>
			{form}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		tasks: state.tasks,
		currentGroup: state.currentGroup
	};
}

export default connect(mapStateToProps)(TaskList);