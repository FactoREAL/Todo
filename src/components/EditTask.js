import React, { Component } from 'react';

class EditTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.task.title,
			taskId: this.props.task.id
		};
	}

	handlerChange = e => {
		this.setState({
			value: e.target.value
		});
	}

	handlerSave = () => {
		if (this.state.value) this.props.editSave({id: this.state.taskId, title: this.state.value});
	}

	handlerCancel = () => {
		this.props.editCancel(this.state.taskId);
	}

	handlerPress = (e) => {
		if (e.key === 'Enter') this.handlerSave();
	}

	render() {
		return (
			<li key={this.props.task.id} className="list-group-item form-inline">
				<div className="form-group row">
					<input className="form-control col-8" value={this.state.value} onKeyPress={this.handlerPress} onChange={this.handlerChange}/>
					<div className="col-4 text-center">
						<button className="btn btn-primary btn-sm form-control mr-2" onClick={this.handlerSave}>Сохранить</button>
						<button className="btn btn-outline-secondary btn-sm form-control" onClick={this.handlerCancel}>отмена</button>
					</div>
				</div>
			</li>
		);
	}
	
}

export default EditTask;