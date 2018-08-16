import React, { Component } from 'react';

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			group: props.currentGroup
		};
		this.handlerChange = this.handlerChange.bind(this);
		this.handlerSubmit = this.handlerSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentGroup !== this.state.group) this.setState({group: nextProps.currentGroup});
	}

	handlerChange(e) {
		this.setState({value: e.target.value});
	}

	handlerSubmit(group, title) {
		if (group && title) {
			this.props.handlerSubmit(group, title);
			this.setState({value: ''});
		}
	}

	render() {
		return(
			<div className="form-inline bg-light p-2 mx-auto row">
				<input type="text" className="form-control col-10" value={this.state.value} onChange={this.handlerChange}/>
				<div className="col-2 text-center">
					<button className="btn btn-sm btn-primary form-control" onClick={() => {this.handlerSubmit(this.state.group, this.state.value)}}>Добавить</button>
				</div>
			</div>
		);
	}
}

export default AddTask;