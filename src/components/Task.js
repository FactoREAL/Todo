import React, { Component } from 'react';

class Task extends Component {
	handlerDelete = () => {
		this.props.deleteTask(this.props.task.id);
	}

	handlerEdit = () => {
		this.props.editTask(this.props.task.id);
	}

	handlerToggle = () => {
		this.props.toggleTask(this.props.task.id);
	}

	render() {
		let {task} = this.props;
		let done = task.done ? "fa fa-check-circle" : "fa fa-circle-thin";
		let doneCss = task.done ? "btn btn-sm btn-outline-success mr-2" : "btn btn-sm btn-outline-secondary mr-2";
		return (
			<li key={task.id} className="list-group-item">
				<button className={doneCss} onClick={this.handlerToggle}>
					<i className={done} />
				</button>
				{task.title}
				<button className="btn btn-outline-danger btn-sm float-right mx-1" onClick={this.handlerDelete}>
					<i className="fa fa-trash"/>
				</button>
				<button className="btn btn-outline-info btn-sm float-right mx-1" onClick={this.handlerEdit}>
					<i className="fa fa-pencil"/>
				</button>
			</li>
		);
	}
}

export default Task;