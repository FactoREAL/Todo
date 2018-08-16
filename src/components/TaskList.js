import React from 'react';
import AddTask from './AddTask'
import Task from './Task'
import EditTask from './EditTask'

function TaskList({tasks, currentGroup, handlerNewTask, handlerTaskToggle, handlerTaskDelete, handlerTaskEdit, handlerEditSave, handlerEditCancel}) {
	let form = (currentGroup) ? <AddTask currentGroup={currentGroup} handlerSubmit={handlerNewTask}/> : null;
	return(
		<div className="col-8">
			<h5 className="text-center">Задачи</h5>
			<ul className="list-group list-group-flush mb-3">
				{tasks.map(task => {
					if (task.edit) return <EditTask task={task} handlerSave={handlerEditSave} handlerCancel={handlerEditCancel}/>
					return <Task task={task} handlerClick={handlerTaskToggle} handlerEdit={handlerTaskEdit} handlerDelete={handlerTaskDelete}/>;
				})}
			</ul>
			{form}
		</div>
	);
}

export default TaskList;