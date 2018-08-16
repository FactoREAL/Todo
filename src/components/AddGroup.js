import React, { Component } from 'react';

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

	handlerSubmit(title) {
		if (title) {
			this.props.handlerSubmit(title);
			this.setState({value: ''});
		}
	}

	render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text" className="form-control col-8" value={this.state.value} onChange={this.handlerChange}/>
				<div className="col-4 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={() => {this.handlerSubmit(this.state.value)}}>Добавить</button>
				</div>
			</div>
		);
	}
}

export default AddGroup;