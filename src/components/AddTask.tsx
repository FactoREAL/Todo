import * as React from 'react';
import {IAddTaskProps} from "../types";

interface IState {
	value: string
}

class AddTask extends React.Component<IAddTaskProps, IState> {
	constructor(props: IAddTaskProps) {
		super(props);
		this.state = {
			value: ''
		};
	}

	private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({value: e.currentTarget.value});
	};

	private handleSubmit = () => {
		const {currentGroup, nextTaskId, addTask, incTaskId} = this.props;
		if (currentGroup && this.state.value) {
			addTask({id: nextTaskId, group: currentGroup, title: this.state.value});
			incTaskId();
			this.setState({value: ''});
		}
	};

	private handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') { this.handleSubmit(); }
	};

	public render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text"
					   className="form-control col-10"
					   value={this.state.value}
					   onKeyPress={this.handlePress}
					   onChange={this.handleChange}
				/>
				<div className="col-2 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={this.handleSubmit}>Добавить</button>
				</div>
			</div>
		);
	}
}

export default AddTask;