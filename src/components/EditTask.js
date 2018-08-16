import React, { Component } from 'react';

class EditTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.task.title
		};
		this.handlerChange = this.handlerChange.bind(this);
	}

	handlerChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		let {task, handlerSave, handlerCancel} = this.props;
		return (
			<li key={task.id} className="list-group-item form-inline">
				<div className="form-group row">
					<input className="form-control col-8" value={this.state.value} onChange={this.handlerChange}/>
					<div className="col-4 text-center">
						<button className="btn btn-primary btn-sm form-control mr-2" onClick={() => handlerSave(task.id, this.state.value)}>Сохранить</button>
						<button className="btn btn-outline-secondary btn-sm form-control" onClick={() => handlerCancel(task.id)}>отмена</button>
					</div>
				</div>
			</li>
		);
	}
	
}

export default EditTask;