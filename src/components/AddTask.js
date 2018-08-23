import React, { Component } from 'react';

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handlerChange = e => {
		this.setState({value: e.target.value});
	}

	handlerSubmit = () => {
		let {currentGroup, nextTaskId, addTask, incTaskId} = this.props;
		if (currentGroup && this.state.value) {
			addTask({id: nextTaskId, group: currentGroup, title: this.state.value});
			incTaskId();
			this.setState({value: ''});
		}
	}

	handlerPress = e => {
		if (e.key === 'Enter') this.handlerSubmit();
	}

	render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text" className="form-control col-10" value={this.state.value} onKeyPress={this.handlerPress} onChange={this.handlerChange}/>
				<div className="col-2 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={this.handlerSubmit}>Добавить</button>
				</div>
			</div>
		);
	}
}

export default AddTask;