import React from 'react';
import AddTaskContainer from '../containers/AddTaskContainer';
import Task from './Task';
import EditTask from './EditTask';

function TaskList({tasks, currentGroup, toggleTask, editTask, deleteTask, editSave, editCancel}) {
	let form = (currentGroup) ? <AddTaskContainer /> : null;
	let currentTasks = tasks.filter(task => task.group === currentGroup);
	return (
		<div className="col-8">
			<h5 className="text-center">Задачи</h5>
			<ul className="list-group list-group-flush mb-3">
				{currentTasks.map(task => {
					if (task.edit) return <EditTask task={task} editSave={editSave} editCancel={editCancel} />
					return <Task task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />;
				})}
			</ul>
			{form}
		</div>
	);
}

export default TaskList;