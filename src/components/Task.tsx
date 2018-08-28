import * as React from 'react';
import { ITaskProps } from "../types";

class Task extends React.Component<ITaskProps> {
	private handlerDelete = () => {
		this.props.deleteTask(this.props.task.id);
	};

	private handlerEdit = () => {
		this.props.editTask(this.props.task.id);
	};

	private handlerToggle = () => {
		this.props.toggleTask(this.props.task.id);
	};

	public render() {
		const {task} = this.props;
		const done = task.done ? "fa fa-check-circle" : "fa fa-circle-thin";
		const doneCss = task.done ? "btn btn-sm btn-outline-success mr-2" : "btn btn-sm btn-outline-secondary mr-2";
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