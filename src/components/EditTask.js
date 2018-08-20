import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editSave, editCancel } from '../actions/task';

class EditTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.task.title,
			taskId: this.props.task.id
		};
		this.handlerChange = this.handlerChange.bind(this);
	}

	handlerChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	handlerSave = () => {
		if (this.state.value) this.props.editSave({id: this.state.taskId, title: this.state.value});
	}

	handlerPress = (e) => {
		if (e.key === 'Enter') this.handlerSave();
	}

	render() {
		let {task, editCancel} = this.props;
		return (
			<li key={task.id} className="list-group-item form-inline">
				<div className="form-group row">
					<input className="form-control col-8" value={this.state.value} onKeyPress={this.handlerPress} onChange={this.handlerChange}/>
					<div className="col-4 text-center">
						<button className="btn btn-primary btn-sm form-control mr-2" onClick={this.handlerSave}>Сохранить</button>
						<button className="btn btn-outline-secondary btn-sm form-control" onClick={() => editCancel(task.id)}>отмена</button>
					</div>
				</div>
			</li>
		);
	}
	
}

function mapDispatchToProps(dispatch) {
	return {
		editSave: data => dispatch(editSave(data)),
		editCancel: data => dispatch(editCancel(data))
	};
}

export default connect(null, mapDispatchToProps)(EditTask);