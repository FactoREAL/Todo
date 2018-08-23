import React, { Component } from 'react';

class AddGroup extends Component {
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
		let {nextGroupId, addGroup, incGroupId} = this.props;
		if (this.state.value) {
			addGroup({id: nextGroupId, title: this.state.value});
			incGroupId();
			this.setState({value: ''});
		}
	}

	handlerPress = e => {
		if (e.key === 'Enter') this.handlerSubmit();
	}

	render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text" className="form-control col-8" value={this.state.value} onKeyPress={this.handlerPress} onChange={this.handlerChange}/>
				<div className="col-4 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={this.handlerSubmit}>Добавить</button>
				</div>
			</div>
		);
	}
}

export default AddGroup;