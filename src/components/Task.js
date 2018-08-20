import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../actions/task';

class Task extends Component { // {task, toggleTask, handlerEdit, deleteTask}	
	componentWillReceiveProps(nextProps) {
		this.forceUpdate(); // не работает
	}

	render() {
		let {task, toggleTask, editTask, deleteTask} = this.props;
		let done = task.done ? "fa fa-check-circle" : "fa fa-circle-thin";
		let doneCss = task.done ? "btn btn-sm btn-outline-success mr-2" : "btn btn-sm btn-outline-secondary mr-2";
		return (
			<li key={task.id} className="list-group-item">
				<button className={doneCss} onClick={() => toggleTask(task.id)}>
					<i className={done} />
				</button>
				{task.title}
				<button className="btn btn-outline-danger btn-sm float-right mx-1" onClick={() => deleteTask(task.id)}>
					<i className="fa fa-trash"/>
				</button>
				<button className="btn btn-outline-info btn-sm float-right mx-1" onClick={() => editTask(task.id)}>
					<i className="fa fa-pencil"/>
				</button>
			</li>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleTask: data => dispatch(toggleTask(data)),
		deleteTask: data => dispatch(deleteTask(data)),
		editTask: data => dispatch(editTask(data))
	};
}

export default connect(null, mapDispatchToProps)(Task);