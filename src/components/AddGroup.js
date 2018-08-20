import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroup, incGroupId } from '../actions/group';

class AddGroup extends Component {
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
		if (this.state.value) {
			this.props.addGroup({id: this.props.nextGroupId, title: this.state.value});
			this.props.incGroupId();
			this.setState({value: ''});
		}
	}

	render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text" className="form-control col-8" value={this.state.value} onChange={this.handlerChange}/>
				<div className="col-4 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={this.handlerSubmit}>Добавить</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		nextGroupId: state.nextGroupId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addGroup: data => dispatch(addGroup(data)),
		incGroupId: () => dispatch(incGroupId())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);