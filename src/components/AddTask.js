import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, incTaskId } from '../actions/task';

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handlerChange = this.handlerChange.bind(this);
		this.handlerSubmit = this.handlerSubmit.bind(this);
	}

	handlerChange(e) {
		this.setState({value: e.target.value});
	}

	handlerSubmit() {
		if (this.props.currentGroup && this.state.value) {
			this.props.addTask({id: this.props.nextTaskId, group: this.props.currentGroup, title: this.state.value, done: false, edit: false});
			this.props.incTaskId();
			this.setState({value: ''});
		}
	}

	render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text" className="form-control col-10" value={this.state.value} onChange={this.handlerChange}/>
				<div className="col-2 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={this.handlerSubmit}>Добавить</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentGroup: state.currentGroup,
		nextTaskId: state.nextTaskId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addTask: data => dispatch(addTask(data)),
		incTaskId: () => dispatch(incTaskId())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);